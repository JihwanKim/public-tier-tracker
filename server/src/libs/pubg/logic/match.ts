import {
  PubgAPICustomMatchInfo,
  PubgAPIPlatform, PubgAPISimpleMatchInfo
} from "@libs/pubg/pubg_api_types";
import {FnFlow} from "@libs/flow/fnflow";
import {getOrStoreMatch, getStoreUserMatchesId} from "@libs/pubg/core/match";
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {NormalItem} from "@libs/common_types";
import {getAllByDoubleKey} from "@libs/store/ddb";

export async function getMatches(platform: PubgAPIPlatform, matchIds: string[]):
  Promise<FnOkResult<Array<NormalItem<PubgAPICustomMatchInfo>>> | FnFailResult<unknown>> {
  const fnFlow = new FnFlow();
  fnFlow.addDo(async () => {
    const allMatchesPromise = matchIds.map((matchId) => getOrStoreMatch(platform, matchId));
    const allMatchesPromiseResult = await Promise.all(allMatchesPromise);
    return new FnOkResult({
                            matches:
                              allMatchesPromiseResult
                                .filter((match) => match instanceof FnOkResult)
                                .map((okMatch) => {
                                       if (okMatch instanceof FnOkResult)
                                         return okMatch.data
                                       return okMatch.data;
                                     },
                                )
                          });
  })

  const rs = await fnFlow.asyncRun();
  if (rs instanceof FnOkResult) {
    return rs as FnOkResult<Array<NormalItem<PubgAPICustomMatchInfo>>>;
  }
  return rs as FnFailResult<unknown>;
}

export function toResponseFormatting(items: Array<NormalItem<PubgAPISimpleMatchInfo>>): Array<Record<string, unknown>> {
  const data: Array<Record<string, unknown>> = [];

  items.forEach((simpleMatch) => {
    data.push({sort: simpleMatch.id, type: simpleMatch.item.type, id: simpleMatch.item.id});
  })

  return data;
}

export async function getUserMatchIds(platform: PubgAPIPlatform, name: string, afterSort: string | null): Promise<FnOkResult<Array<Record<string, unknown>>> | FnFailResult<unknown>> {
  const fnFlow = new FnFlow();
  const keyStoreUserMatchId = 'ids';
  fnFlow.addBind(keyStoreUserMatchId, () => {
    return new FnOkResult(getStoreUserMatchesId(platform, name));
  });
  fnFlow.addDo(async (state) => {
    const key = state[keyStoreUserMatchId] as string;
    return await getAllByDoubleKey(key, afterSort, 20);
  })
  fnFlow.addDo((state) => {
    const simpleMatches = (state['result'] as FnOkResult<Array<NormalItem<PubgAPISimpleMatchInfo>>>).data;
    return new FnOkResult({matchesSimple: toResponseFormatting(simpleMatches)});
  })

  const rs = await fnFlow.asyncRun();
  if (rs instanceof FnOkResult) {
    return rs as FnOkResult<Array<Record<string, unknown>>>;
  }
  return rs as FnFailResult<unknown>;
}