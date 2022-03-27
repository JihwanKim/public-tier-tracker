import {get} from './common/pubg_requester'
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {
  PubgAPIPlatform,
  PubgAPIPlayer,
  PubgAPIPlayerSearchError
} from "@libs/pubg/pubg_api_types";

// shards/kakao/players?filter[playerNames]=my_user1234

export async function getPubgPlayerInfo(platform: PubgAPIPlatform, playerName: string): Promise<FnOkResult<PubgAPIPlayer> | FnFailResult<PubgAPIPlayerSearchError>> {
  const getRs = await get(`shards/${platform}/players`, {['filter[playerNames]']: playerName}
  )
  if (getRs instanceof FnOkResult) {
    return new FnOkResult(getRs.data.data[0] as PubgAPIPlayer);
  }
  return new FnFailResult(getRs.data.errors[0]);
}
