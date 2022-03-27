import {FnFlow} from "@libs/flow/fnflow";
import {request} from "@libs/common_utils/common_requester";
import {getBySingleKey, putBySingleKey} from "@libs/store/ddb";
import {getPubgPlayerInfo} from "@libs/pubg/apis/pubg_players";
import {AnyItem, NormalItem} from "@libs/common_types";
import {PubgAPIPlatform, PubgAPIPlayer} from "@libs/pubg/pubg_api_types";
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {isCanRefresh} from "@libs/common_utils/utils";

export async function getUserInfo(platform: PubgAPIPlatform, name: string, refresh: boolean): Promise<FnOkResult<AnyItem<PubgAPIPlayer>> | FnFailResult<unknown>> {
  const fnFlow = new FnFlow();
  const keyRequireRefresh = 'requireRefresh';
  const keyPlayerInfo = 'playerInfo';
  fnFlow.addBind(keyPlayerInfo, async () => {
    return await request(putBySingleKey,
                         getBySingleKey,
                         () => getPubgPlayerInfo(platform, name),
                         false,
                         `pubg#${platform}:${name}`);
  });
  fnFlow.addBind(keyRequireRefresh, (state) => {
    const playerInfo = state[keyPlayerInfo] as NormalItem<PubgAPIPlayer>;
    return new FnOkResult(isCanRefresh(playerInfo.inserted_timestamp));
  });
  fnFlow.addDo(async (state) => {
    const requireRefresh = state[keyRequireRefresh] as boolean;
    const playerInfo = state[keyPlayerInfo] as NormalItem<PubgAPIPlayer>;
    if (refresh && requireRefresh) {
      return await request(putBySingleKey,
                           getBySingleKey,
                           () => getPubgPlayerInfo(platform, name),
                           refresh,
                           `pubg#${platform}:${name}`);
    }
    return new FnOkResult(playerInfo);
  });
  const rs = await fnFlow.asyncRun();
  if (rs instanceof FnOkResult) {
    return rs as FnOkResult<NormalItem<PubgAPIPlayer>>;
  }
  return rs as FnFailResult<unknown>;
}