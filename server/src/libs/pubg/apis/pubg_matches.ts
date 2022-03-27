// https://api.pubg.com/shards/kakao/matches/cd6f982a-36de-49e5-bca8-88d4da69f174

import {PubgAPIPlatform, PubgAPICustomMatchInfo, PubgAPIMatchInfo} from "@libs/pubg/pubg_api_types";
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {get} from "@libs/pubg/apis/common/pubg_requester";

export async function getMatch(platform: PubgAPIPlatform, matchId: string): Promise<FnOkResult<PubgAPICustomMatchInfo> | FnFailResult<unknown>> {
  const getRs = await get(`shards/${platform}/matches/${matchId}`)
  if (getRs instanceof FnOkResult) {
    const matchInfo = getRs.data.data as PubgAPIMatchInfo;
    const matchIncluded = getRs.data.included;
    return new FnOkResult({
      matchInfo: matchInfo,
      included: matchIncluded
    });
  }
  return new FnFailResult(getRs.data.errors[0]);
}