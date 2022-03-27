import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {CommonReturn, ExpiredItem, NormalItem} from "@libs/common_types";
import {
  PubgAPIPlatform, PubgAPIRankDetailPerMode,
  PubgAPIRankStat,
  PubgAPISeason,
  PubgAPISeasonDetail
} from "@libs/pubg/pubg_api_types";
import {request} from "@libs/common_utils/common_requester";
import {getByDoubleKey, getBySingleKey, putByDoubleKey, putBySingleKey} from "@libs/store/ddb";
import {getRankSeasonInfo, getSeasonInfo, getSeasons} from "@libs/pubg/apis/pubg_seasons";
import {makeKey, zip} from "@libs/common_utils/utils";
import {FnFlow} from "@libs/flow/fnflow";

export function getStoreId(platform: PubgAPIPlatform, accountId: string): string {
  return `pubg#${platform}#${accountId}`;
}

export function getSortId(targetSeason: PubgAPISeason, rank: boolean): string {
  return `${targetSeason}#${rank ? 'rank' : 'normal'}`;
}

export async function getOrStoreStat(platform: PubgAPIPlatform, accountId: string, targetSeason: PubgAPISeason, rank: boolean, isRefresh = false)
  : Promise<CommonReturn<unknown>> {
  return await request(
    putByDoubleKey,
    getByDoubleKey,
    async () => rank ? await getRankSeasonInfo(platform, accountId, targetSeason) : await getSeasonInfo(platform, accountId, targetSeason,),
    isRefresh,
    getStoreId(platform, accountId),
    getSortId(targetSeason, rank)
  );
}

export async function getAllSeasons(): Promise<FnOkResult<ExpiredItem<Array<PubgAPISeasonDetail>>> | FnFailResult<unknown>> {
  return await request((id: string, items: object) => putBySingleKey(id, items, 1000 * 60 * 60 * 24),
                       getBySingleKey,
                       async () => await getSeasons('steam'),
                       false,
                       'pubg#seasons') as FnOkResult<ExpiredItem<Array<PubgAPISeasonDetail>>>;
}


export function getStatHistoryKey(isRank: boolean, platform: PubgAPIPlatform, userId: string, mode: string): string {
  return makeKey('pubg', platform, userId, 'stats', 'history', mode, isRank ? 'rank' : 'normal');
}

export function getStatHistorySubKey(season: PubgAPISeason): string {
  const now = new Date();
  return `${season}#${now.getFullYear()}${now.getMonth()}${now.getDate()}`;
}

export async function saveHistory(platform: PubgAPIPlatform, userId: string, season: PubgAPISeason, stat: PubgAPIRankStat)
  : Promise<FnOkResult<true>> {
  const modes = Object.keys(stat.attributes.rankedGameModeStats);
  const items = modes.map((mode) => {
    const key = getStatHistoryKey(true, platform, userId, mode);
    const subKey = getStatHistorySubKey(season);
    return putByDoubleKey(key, subKey, stat.attributes.rankedGameModeStats[mode] as object);
  });
  await Promise.all(items);
  return new FnOkResult(true);
}

export function getTopTierKey(isRank: boolean, platform: PubgAPIPlatform, userId: string, mode: string): string {
  return makeKey('pubg', platform, userId, 'stats', 'top', mode, isRank ? 'rank' : 'normal');
}

export function getTopTierSubKey(season: PubgAPISeason): string {
  return `rank#${season}`;
}

export async function saveTopRank(platform: PubgAPIPlatform, userId: string, season: PubgAPISeason, stat: PubgAPIRankStat)
  : Promise<FnOkResult<unknown> | FnFailResult<unknown>> {
  const flow = new FnFlow();
  flow.addBind('currentTopTier', async () => {
    const allModes = Object.keys(stat.attributes.rankedGameModeStats);
    const allPromise = allModes.map((mode) => {
      return getByDoubleKey(getTopTierKey(true, platform, userId, mode), getTopTierSubKey(season));
    });
    const allItems = await Promise.all(allPromise);
    const zipObj = zip(allModes, allItems);
    return new FnOkResult(zipObj.map((items) => {
      const mode = items[0];
      const rs = items[1];
      if (rs instanceof FnOkResult) {
        const item = (rs.data as NormalItem<object>);
        const topPoint = item.item['point'] as number;
        return [mode, topPoint];
      } else {
        return [mode, 0];
      }
    }));
  });
  flow.addDo(async (state) => {
    const topTiers = state['currentTopTier'] as Array<Array<string | number>>;
    const allPromise = topTiers.filter((tierInfo) => {
      const mode = tierInfo[0] as string;
      const point = tierInfo[1] as number;
      const stats = stat.attributes.rankedGameModeStats[mode] as PubgAPIRankDetailPerMode;
      const bestPoint = stats.bestRankPoint;
      return point <= bestPoint;
    }).map((tierInfo) => {
      const mode = tierInfo[0] as string;
      const point = tierInfo[1] as number;

      return putByDoubleKey(getTopTierKey(true, platform, userId, mode), getTopTierSubKey(season), {point: point});
    })
    await Promise.all(allPromise);
    return new FnOkResult(true);
  });

  return await flow.asyncRun();
}