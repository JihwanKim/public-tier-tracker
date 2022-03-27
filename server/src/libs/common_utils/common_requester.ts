import {FnFailResult, FnOkResult, FnResult} from "@libs/flow/fn_result";
import {AnyItem, CommonReturn} from "@libs/common_types";

type StoreRequester = (...args: unknown[]) => Promise<CommonReturn<unknown>>
type NormalRequester = (...args: unknown[]) => Promise<FnResult<unknown>>
// 데이터 갱신은 ?
// FnOkResult<AnyItem<unknown>>
// | FnOkResult<Array<AnyItem<unknown>>>
// | FnFailResult<unknown>;

// 조회하고 데이터가 없다면, 데이터를 긁어와야함
// 조회했는데, 데이터가 있고, expired_timestamp 값이 현재보다 작다면, 데이터를 새로긁어오고 해당값을 반환해야함.
export async function request(putter: NormalRequester,
                              getter: StoreRequester,
                              ifNotExist: NormalRequester,
                              refresh: boolean,
                              // id, sort items
                              ...args: string[]): Promise<CommonReturn<unknown>> {
  let requireData = false;
  if (refresh) {
    requireData = true;
  }
  const item: CommonReturn<unknown> = await getter(...args);
  if (item instanceof FnFailResult) {
    requireData = true;
  } else {
    const responseData = item.data as AnyItem<unknown>;
    if ('expired_timestamp' in responseData) {
      requireData = requireData || responseData.expired_timestamp < new Date().getTime();
    }
  }

  if (requireData) {
    const showItem = await ifNotExist();
    if (showItem instanceof FnOkResult) {
      const putItem: FnOkResult<unknown> | FnFailResult<unknown> = await putter(...args, showItem.data);
      if (putItem instanceof FnOkResult) {
        return await getter(...args);
      } else {
        return putItem;
      }
    } else {
      // 데이터 조회 실패
      return showItem as FnFailResult<unknown>;
    }
  }

  return item;
}