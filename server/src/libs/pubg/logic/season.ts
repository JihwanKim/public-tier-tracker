import {
  PubgAPIPlatform,
  PubgAPIPlayer,
  PubgAPIRankStat,
  PubgAPISeason
} from "@libs/pubg/pubg_api_types";
import {FnFlow} from "@libs/flow/fnflow";
import {getUserInfo} from "@libs/pubg/core/user";
import {NormalItem} from "@libs/common_types";
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {getOrStoreStat, saveHistory, saveTopRank} from "@libs/pubg/core/season";

export async function getRankInfo(platform: PubgAPIPlatform, name: string, season: PubgAPISeason, isRank: boolean)
  : Promise<FnOkResult<NormalItem<PubgAPIRankStat>> | FnFailResult<unknown>> {
  const flow = new FnFlow();
  flow.addBind('user', async () => {
    return await getUserInfo(platform, name, false);
  })
  flow.addBind('rankStats', async (state) => {
    const user = state['user'] as NormalItem<PubgAPIPlayer>;
    return await getOrStoreStat(platform, user.item.id, season, isRank);
  });
  flow.addDo(async (state) => {
    const user = state['user'] as NormalItem<PubgAPIPlayer>;
    const rankStat = state['rankStats'] as NormalItem<PubgAPIRankStat>;
    if (rankStat.inserted_timestamp < user.inserted_timestamp) {
      return await getOrStoreStat(platform, user.item.id, season, isRank, true);
    }
    return new FnOkResult(rankStat);
  });
  flow.addAfter(async (state) => {
    if (!isRank) return new FnOkResult(true);
    const user = state['user'] as NormalItem<PubgAPIPlayer>;
    const rankStat: PubgAPIRankStat = (state['result'] as FnOkResult<NormalItem<PubgAPIRankStat>>).data.item;
    await Promise.all([
                        saveHistory(platform, user.item.id, season, rankStat),
                        saveTopRank(platform, user.item.id, season, rankStat)
                      ]);
    return new FnOkResult(true);
  });

  const rs = await flow.asyncRun();
  if (rs instanceof FnOkResult) {
    return rs as FnOkResult<NormalItem<PubgAPIRankStat>>;
  }
  return rs as FnFailResult<unknown>;
}