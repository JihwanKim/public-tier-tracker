import {
  PubgAPICustomMatchInfo,
  PubgAPIMatchParticipants,
  PubgAPIMatchRoster,
  PubgAPIPlatform,
  PubgAPISimpleMatchInfo
} from "@libs/pubg/pubg_api_types";
import {FnFlow} from "@libs/flow/fnflow";
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {
  getAllByDoubleKey,
  getBySingleKey,
  putBatchByDoubleKey,
  putByDoubleKey,
  putBySingleKey
} from "@libs/store/ddb";
import {NormalItem} from "@libs/common_types";
import {getMatch} from "@libs/pubg/apis/pubg_matches";
import {request} from "@libs/common_utils/common_requester";

export function getStoreUserMatchesId(platform: PubgAPIPlatform, userId: string): string {
  return `pubg#${platform}#${userId}#matches`;
}

export function getStoreMatchId(platform: PubgAPIPlatform, matchId: string): string {
  return `pubg#${platform}#matches#${matchId}`;
}

export function matchAfterSlice(existMatch: {
                                  item: { id: string }
                                } | null,
                                matches: Array<{ id: string }>): Array<{ id: string }> {
  if (existMatch == null) return matches;
  const putTargetMatches: Array<{ id: string }> = [];
  let pushOff = false;
  for (const match of matches) {
    if (existMatch.item.id === match.id) {
      pushOff = true;
      break;
    }
    if (!pushOff) {
      putTargetMatches.push(match);
    }
  }
  return putTargetMatches;
}

export async function storeUserMatches(platform: PubgAPIPlatform, userId: string, matches: Array<PubgAPISimpleMatchInfo>): Promise<FnOkResult<unknown> | FnFailResult<unknown>> {
  const fnFlow = new FnFlow();
  const storeUserMatchesId = getStoreUserMatchesId(platform, userId);
  const keyExistMatches = 'existMatches';
  const keyRequirePutMatches = 'requirePutMatches';
  fnFlow.addBind(keyExistMatches, async () => {
    return await getAllByDoubleKey(storeUserMatchesId, new Date().getTime().toString(), 1);
  })
  fnFlow.addBind(keyExistMatches, (state) => {
    const existMatches = state[keyExistMatches] as Array<NormalItem<PubgAPISimpleMatchInfo>>;
    if (existMatches.length === 0) {
      return new FnOkResult(null);
    }
    return new FnOkResult(existMatches[0]);
  })
  fnFlow.addBind(keyRequirePutMatches, (state) => {
    // 저장되지 않은 매치들만 찾아냄
    const existMatch = state[keyExistMatches] as NormalItem<PubgAPISimpleMatchInfo> | null;
    return new FnOkResult(matchAfterSlice(existMatch, matches));
  })
  fnFlow.addDo((state) => {
    // 저장되지 않은 매치들만 찾아냄
    const requirePutMatches = state[keyRequirePutMatches] as Array<PubgAPISimpleMatchInfo>;
    if (requirePutMatches.length === 0)
      return new FnFailResult('NoMorePut');
  })
  fnFlow.addDo(async (state) => {
    const requirePutMatches = state[keyRequirePutMatches] as Array<PubgAPISimpleMatchInfo>;
    const currentTime = new Date().getTime();
    const existMatch = state[keyExistMatches] as NormalItem<PubgAPISimpleMatchInfo> | null;
    if (existMatch == null && requirePutMatches.length === matches.length) {
      await putByDoubleKey(storeUserMatchesId, (currentTime).toString(), {message: 'untracked matches'});
    }
    return await putBatchByDoubleKey(storeUserMatchesId, requirePutMatches.reverse().map((match, index) => {
      return {
        sort: (currentTime + index + 1).toString(), item: match
      }
    }));
  });

  return await fnFlow.asyncRun();
}

export async function getOrStoreMatch(platform: PubgAPIPlatform, matchId: string): Promise<FnOkResult<NormalItem<PubgAPICustomMatchInfo>> | FnFailResult<unknown>> {
  const storeMatchId = getStoreMatchId(platform, matchId);
  const fnFlow = new FnFlow();
  fnFlow.addDo(async () => {
    return await request(
      putBySingleKey,
      getBySingleKey,
      (async () => await getMatch(platform, matchId)),
      false,
      storeMatchId,
    )
  });
  fnFlow.addDo((state) => {
    const match = state['result'] as FnOkResult<NormalItem<PubgAPICustomMatchInfo>>;
    const matchDetail = matchSimplify(match.data.item);
    return new FnOkResult(matchDetail);
  });

  const rs = await fnFlow.asyncRun();
  if (rs instanceof FnOkResult) {
    return rs as FnOkResult<NormalItem<PubgAPICustomMatchInfo>>;
  }
  return rs as FnFailResult<unknown>;
}

export function matchSimplify(match: PubgAPICustomMatchInfo): Record<string, unknown> {
  const matchInfo: Record<string, unknown> = {};
  // isCustomMatch: boolean,
  //   matchType: string,
  matchInfo['mapName'] = match.matchInfo.attributes.mapName;
  matchInfo['duration'] = match.matchInfo.attributes.duration;
  matchInfo['createdAt'] = match.matchInfo.attributes.createdAt;
  matchInfo['gameMode'] = match.matchInfo.attributes.gameMode;
  matchInfo['seasonState'] = match.matchInfo.attributes.seasonState;
  matchInfo['isCustomMatch'] = match.matchInfo.attributes.isCustomMatch;
  matchInfo['matchType'] = match.matchInfo.attributes.matchType;

  const rosters: Record<string, PubgAPIMatchRoster> = {};
  const users: Record<string, PubgAPIMatchParticipants> = {};
  match.included.forEach((matchElement) => {
    if (matchElement.type === 'roster')
      rosters[matchElement.id] = matchElement

    if (matchElement.type === 'participant')
      users[matchElement.id] = matchElement
  });
  const rosterKeysForSortByTeamRank = Object.keys(rosters).sort((ele1, ele2) => {
    const ele1Rs = rosters[ele1];
    const ele2Rs = rosters[ele2];
    return ele1Rs.attributes.stats.rank < ele2Rs.attributes.stats.rank ? -1 : 1
  })

  matchInfo['rosters'] = rosterKeysForSortByTeamRank.map((rosterKey) => {
    const roster = rosters[rosterKey];
    return roster.relationships.participants.data.map((user) => users[user.id]);
  });

  return matchInfo;
}