import * as ddb from '@libs/store/ddb'
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {AnyItem} from "@libs/common_types";

describe('Store DDB Test', () => {
  // delete if test end
  // afterAll(() => {
  //   conection.close();
  // });

  it('putBySingleKey : success', async () => {
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);
    const rs = await ddb.putBySingleKey('test:1', {
      first: '1234',
      second: '45678'
    });
    expect(rs.data).toEqual({})
  });
  it('getBySingleKey: success', async () => {
    const rs = await ddb.getBySingleKey('test:1');
    expect(rs).toBeInstanceOf(FnOkResult);
    expect(rs.data).toEqual({
                              id: 'test:1',
                              item: {first: '1234', second: '45678'},
                              inserted_timestamp: 0
                            });
  });
  it('getBySingleKey: not_exist_item', async () => {
    const rs = await ddb.getBySingleKey('test:2');
    expect(rs).toBeInstanceOf(FnFailResult);
    expect(rs.data).toEqual('NotFound');
  });
  it('putBySingleKey with expired : success ', async () => {
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);
    const rs = await ddb.putBySingleKey('test:expired:1', {
      first: '1234',
      second: '45678'
    }, 1000);
    expect(rs.data).toEqual({})
  });
  it('getBySingleKey with expired : success', async () => {
    const rs = await ddb.getBySingleKey('test:expired:1');
    expect(rs).toBeInstanceOf(FnOkResult);
    expect(rs.data).toEqual({
                              id: 'test:expired:1',
                              item: {
                                first: '1234',
                                second: '45678'
                              },
                              inserted_timestamp: 0,
                              expired_timestamp: 1000
                            });
  });
  it('putByDoubleKey: success', async () => {
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);
    const rs = await ddb.putByDoubleKey('test:1', 'test:sort', {
      first: '1234',
      second: '45678'
    });
    expect(rs.data).toEqual({})
  });
  it('getByDoubleKey: success', async () => {
    const rs = await ddb.getByDoubleKey('test:1', 'test:sort');
    expect(rs.data).toEqual({
                              id: 'test:1',
                              sort: 'test:sort',
                              item: {
                                first: '1234',
                                second: '45678'
                              },
                              inserted_timestamp: 0
                            });
  });
  it('getByDoubleKey: not_exist_item', async () => {
    const rs = await ddb.getByDoubleKey('test:2', 'test:sort');
    expect(rs).toBeInstanceOf(FnFailResult);
    expect(rs.data).toEqual('NotFound');
  });
  it('putByDoubleKey with expired : success', async () => {
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);
    const rs = await ddb.putByDoubleKey('test:expired:1', 'test:sort', {
      first: '1234',
      second: '45678'
    }, 1000);
    expect(rs.data).toEqual({})
  });
  it('getByDoubleKey with expired : success', async () => {
    const rs = await ddb.getByDoubleKey('test:expired:1', 'test:sort');
    expect(rs.data).toEqual({
                              id: 'test:expired:1',
                              sort: 'test:sort',
                              item: {
                                first: '1234',
                                second: '45678'
                              },
                              inserted_timestamp: 0,
                              expired_timestamp: 1000
                            });
  });

  it('getAllByDoubleKey', async () => {
    const id = "test:all:1";
    const expectedValue = [
      {
        "id": id,
        "sort": "test:sort:2",
        "item": {
          "first": "asdf",
          "second": "qwerty",
        },
        "inserted_timestamp": 0,
      },
      {
        "id": id,
        "sort": "test:sort:1",
        "item": {
          "first": "1234",
          "second": "45678",
        },
        "inserted_timestamp": 0
      },
    ];
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);
    await ddb.putByDoubleKey(id, 'test:sort:1', {
      first: '1234',
      second: '45678'
    });
    await ddb.putByDoubleKey(id, 'test:sort:2', {
      first: 'asdf',
      second: 'qwerty'
    });
    const rs = await ddb.getAllByDoubleKey('test:all:1');

    expect(rs.data).toEqual(expectedValue);


    const rs2 = await ddb.getAllByDoubleKey('test:all:1', 'test:sort:2', 1);
    expect(rs2.data).toEqual([expectedValue[1]]);

    const rs3 = await ddb.getAllByDoubleKey('test:all:1', 'test:sort:3', 1);
    expect(rs3.data).toEqual([expectedValue[0]]);

    const rs4 = await ddb.getAllByDoubleKey('test:all:will_not_exist', 'test:sort:3', 1);
    expect((rs4.data as Array<unknown>).length).toEqual(0);
  });

  it('getAllByDoubleKeyWithSorts', async () => {
    const id = "test:doubleKeyWithSorts:1";
    const expectedValue = [
      {
        "id": id,
        "sort": "test:sort:1",
        "item": {
          "first": "1234",
          "second": "45678",
        },
        "inserted_timestamp": 0
      },
      {
        "id": id,
        "sort": "test:sort:2",
        "item": {
          "first": "asdf",
          "second": "qwerty",
        },
        "inserted_timestamp": 0,
      },
    ];
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);
    await ddb.putByDoubleKey(id, expectedValue[0].sort, expectedValue[0].item);
    await ddb.putByDoubleKey(id, expectedValue[1].sort, expectedValue[1].item);
    const sorts = expectedValue.map((ele) => ele.sort);
    sorts.push('test:sort:-4');
    const rs = await ddb.getAllByDoubleKeyWithSorts(id, sorts);
    const rsData = (rs.data as Array<AnyItem<Record<string, unknown>>>).sort((ele1, ele2) => {
      return ele1.sort < ele2.sort ? -1 : 1;
    });
    expect(rsData).toEqual(expectedValue);
  });

  it('putBatchByDoubleKey : success', async () => {
    const id = 'test:batch:1';
    const expectedValue = [
      {
        "id": id,
        "sort": "1",
        "item": {
          "first": "1234",
          "second": "45678",
        },
        "inserted_timestamp": 0
      },
      {
        "id": id,
        "sort": "2",
        "item": {
          "first": "asdf",
          "second": "qwerty",
        },
        "inserted_timestamp": 0,
      },
    ];
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);
    const rs = await ddb.putBatchByDoubleKey(id, [
      {
        sort: '1',
        item: {
          "first": "1234",
          "second": "45678",
        }
      },
      {
        sort: '2',
        item: {
          "first": "asdf",
          "second": "qwerty",
        }
      },
    ]);
    expect(rs.data).toEqual({
                              "UnprocessedItems": {},
                            });
    const existCheck = await ddb.getAllByDoubleKey(id);
    expect(existCheck.data).toEqual(expectedValue.reverse())
  });

  it('del : success', async () => {
    const rs = await ddb.testDeleteAllDoubleKey('pubg#kakao#test1234#matches');
    expect(rs.data).toEqual({UnprocessedItems: {}})

    const rs2 = await ddb.getAllByDoubleKey('pubg#kakao#test1234#matches');

    expect(rs2.data).toEqual([])
  });
});

