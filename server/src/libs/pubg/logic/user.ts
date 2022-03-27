import {PubgAPIPlatform, PubgAPIPlayer} from "@libs/pubg/pubg_api_types";
import * as coreUser from '@libs/pubg/core/user';
import {FnFlow} from "@libs/flow/fnflow";
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {NormalItem} from "@libs/common_types";
import {storeUserMatches} from "@libs/pubg/core/match";


export function pubgAPIUserToCustom(item: NormalItem<PubgAPIPlayer>): Record<string, unknown> {
  const src = {latestUpdate: item.inserted_timestamp};
  Object.assign(src, item.item.attributes);
  return src;
}

export async function getUserInfo(platform: PubgAPIPlatform, name: string, refresh: boolean): Promise<FnOkResult<Record<string, unknown>> | FnFailResult<unknown>> {
  const fnFlow = new FnFlow();
  fnFlow.addDo(async () => {
    return await coreUser.getUserInfo(platform, name, refresh);
  });
  fnFlow.addAfter(async (state) => {
    const userInfo = (state['result'] as FnOkResult<NormalItem<PubgAPIPlayer>>).data;
    const allMatches = userInfo.item.relationships.matches.data;
    if (allMatches.length !== 0) {
      await storeUserMatches(platform, userInfo.item.id, allMatches);
    }
    return new FnOkResult({});
  });
  fnFlow.addDo((state) => {
    const userInfo = (state['result'] as FnOkResult<NormalItem<PubgAPIPlayer>>).data;
    return new FnOkResult(pubgAPIUserToCustom(userInfo));
  });

  const rs = await fnFlow.asyncRun();
  if (rs instanceof FnOkResult) {
    return rs as FnOkResult<Record<string, unknown>>;
  }
  return rs as FnFailResult<unknown>;
}