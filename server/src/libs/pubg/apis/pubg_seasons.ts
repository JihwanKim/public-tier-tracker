import {get} from './common/pubg_requester'
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {
  PubgAPIPlatform,
  PubgAPIRankStat, PubgAPISeason,
  PubgAPISeasonDetail,
  PubgAPISeasonStats
} from "@libs/pubg/pubg_api_types";

export async function getSeasons(platform: PubgAPIPlatform): Promise<FnOkResult<Array<PubgAPISeasonDetail>> | FnFailResult<unknown>> {
  const getRs = await get(`shards/${platform}/seasons`)
  if (getRs instanceof FnOkResult) {
    return new FnOkResult(getRs.data.data as Array<PubgAPISeasonDetail>);
  }
  return new FnFailResult(getRs.data.errors[0]);
}

// https://api.pubg.com/shards/kakao/players/account.17a886f7f182495b95e5182233d562bb/seasons/division.bro.official.pc-2018-01?filter[gamepad]=false
export async function getSeasonInfo(platform: PubgAPIPlatform, accountId: string, targetSeason: string): Promise<FnOkResult<PubgAPISeasonStats> | FnFailResult<unknown>> {
  const getRs = await get(`shards/${platform}/players/${accountId}/seasons/${targetSeason}`, {['filter[gamepad]']: false})
  if (getRs instanceof FnOkResult) {
    return new FnOkResult(getRs.data.data as PubgAPISeasonStats);
  }
  return new FnFailResult(getRs.data.errors[0]);
}

export async function getRankSeasonInfo(platform: PubgAPIPlatform, accountId: string, targetSeason: PubgAPISeason)
  : Promise<FnOkResult<PubgAPIRankStat> | FnFailResult<unknown>> {
  const getRs = await get(`shards/${platform}/players/${accountId}/seasons/${targetSeason}/ranked`, {['filter[gamepad]']: false})
  if (getRs instanceof FnOkResult) {
    return new FnOkResult(getRs.data.data as PubgAPIRankStat);
  }
  return new FnFailResult(getRs.data.errors[0]);
}