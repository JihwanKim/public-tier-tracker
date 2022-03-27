// https://api.pubg.com/shards/$platform/players/$playerId/weapon_mastery
// survival_mastery

import {PubgAPIPlatform, PubgAPIMasteryForSurvival, PubgAPIMasteryForWeapons} from "@libs/pubg/pubg_api_types";
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {get} from "@libs/pubg/apis/common/pubg_requester";

export async function getMasteryForWeapons(platform: PubgAPIPlatform, playerId: string): Promise<FnOkResult<PubgAPIMasteryForWeapons> | FnFailResult<unknown>> {
  const getRs = await get(`shards/${platform}/players/${playerId}/weapon_mastery`)
  if (getRs instanceof FnOkResult) {
    return new FnOkResult(getRs.data.data as PubgAPIMasteryForWeapons);
  }
  return new FnFailResult(getRs.data.errors[0]);
}

export async function getMasteryForSurvival(platform: PubgAPIPlatform, playerId: string): Promise<FnOkResult<PubgAPIMasteryForSurvival> | FnFailResult<unknown>> {
  const getRs = await get(`shards/${platform}/players/${playerId}/survival_mastery`)
  if (getRs instanceof FnOkResult) {
    return new FnOkResult(getRs.data.data as PubgAPIMasteryForSurvival);
  }
  return new FnFailResult(getRs.data.errors[0]);
}