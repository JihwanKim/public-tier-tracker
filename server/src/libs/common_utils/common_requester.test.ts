import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {request} from "@libs/common_utils/common_requester";
import {AnyItem, NotFoundError} from "@libs/common_types";

describe('Common Requester : request Test', () => {
  let testTimestamp = 0;
  let isExpired = true;

  beforeEach(() => {
    testTimestamp = 0;
    isExpired = true;
  });


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function _testPutter(_id: string, _data: unknown): Promise<FnOkResult<unknown>> {
    testTimestamp++;
    return await new Promise((resolve) => resolve(new FnOkResult({})));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function _testPutterWithFail(_id: string, _data: unknown): Promise<FnFailResult<NotFoundError>> {
    return await new Promise((resolve) => resolve(new FnFailResult('NotFound')));
  }

  async function _testGetter(id: string): Promise<FnOkResult<AnyItem<unknown>>> {
    return await new Promise((resolve) => {
      const item = {
        id: id,
        inserted_timestamp: testTimestamp,
        item: 'hello world!'
      }
      resolve(new FnOkResult(item))
    });
  }

  async function _testGetterWithIfTime0NotReturn(id: string): Promise<FnOkResult<AnyItem<unknown>> | FnFailResult<NotFoundError>> {
    return await new Promise((resolve) => {
      if (testTimestamp === 0) {
        resolve(new FnFailResult('NotFound'));
      } else {
        resolve(new FnOkResult({
                                 id: id,
                                 inserted_timestamp: testTimestamp,
                                 item: 'hello world!'
                               }));
      }
    });
  }

  async function _testGetterWithExpiredItem(id: string): Promise<FnOkResult<AnyItem<unknown>>> {
    return await new Promise((resolve) => {
      const item = {
        id: id,
        inserted_timestamp: testTimestamp,
        item: 'hello world!',
      }
      if (isExpired) {
        Object.assign(item, {expired_timestamp: 0});
        isExpired = false;
      } else {
        Object.assign(item, {expired_timestamp: 10})
      }
      resolve(new FnOkResult(item))
    });
  }

  async function _testIfNotExist(): Promise<FnOkResult<string>> {
    return await new Promise((resolve) => resolve(new FnOkResult('hello world!')));
  }

  async function _testIfNotExistWithFail(): Promise<FnOkResult<NotFoundError>> {
    return await new Promise((resolve) => resolve(new FnFailResult('NotFound')));
  }

  it('success: dataExist, refresh=false', async () => {
    const id = 'test:requester:1';
    const result = await request(_testPutter, _testGetter, _testIfNotExist, false, id);
    const expectedResult = {
      id: id,
      inserted_timestamp: 0,
      item: 'hello world!'
    };
    expect((result as FnOkResult<AnyItem<unknown>>).data).toEqual(expectedResult);
  });

  it('success: dataExist, refresh=true', async () => {
    const id = 'test:requester:1';
    const result = await request(_testPutter, _testGetter, _testIfNotExist, true, id);
    const expectedResult = {
      id: id,
      inserted_timestamp: 1,
      item: 'hello world!'
    };
    expect((result as FnOkResult<AnyItem<unknown>>).data).toEqual(expectedResult);
  });

  it('success: dataNotExist, refresh=false', async () => {
    const id = 'test:requester:1';
    const result = await request(_testPutter, _testGetterWithIfTime0NotReturn, _testIfNotExist, false, id);
    const expectedResult = {
      id: id,
      inserted_timestamp: 1,
      item: 'hello world!'
    };
    expect((result as FnOkResult<AnyItem<unknown>>).data).toEqual(expectedResult);
  });

  it('success: data exist & expired', async () => {
    const id = 'test:requester:1';
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(1);
    const result = await request(_testPutter, _testGetterWithExpiredItem, _testIfNotExist, false, id);
    const expectedResult = {
      id: id,
      inserted_timestamp: 1,
      item: 'hello world!',
      expired_timestamp: 10,
    };
    expect((result as FnOkResult<AnyItem<unknown>>).data).toEqual(expectedResult);
  });

  it('fail: refresh & data exist & api fail', async () => {
    const id = 'test:requester:1';
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(1);
    const result = await request(_testPutter, _testGetter, _testIfNotExistWithFail, true, id);
    const expectedResult: NotFoundError = 'NotFound';
    expect((result as FnOkResult<AnyItem<unknown>>).data).toEqual(expectedResult);
  });

  it('fail: data not exist & api fail', async () => {
    const id = 'test:requester:1';
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(1);
    const result = await request(_testPutterWithFail, _testGetter, _testIfNotExist, true, id);
    const expectedResult: NotFoundError = 'NotFound';
    expect((result as FnOkResult<AnyItem<unknown>>).data).toEqual(expectedResult);
  });
});

