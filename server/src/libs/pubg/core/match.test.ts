import * as match from "@libs/pubg/core/match";
import * as storeDDB from "@libs/store/ddb";
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import * as pubgAPIMatches from "@libs/pubg/apis/pubg_matches";
import {
  TestPubgMatchesIncluded,
  TestPubgAPIMatchesDetail
} from "@libs/pubg/apis/pubg_matches.test.data";
import {matchAfterSlice} from "@libs/pubg/core/match";

describe('pubg.core.match TEST', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getStoreUserMatchesId Test', () => {
    it('should success', function () {
      const expectedValue = `pubg#test#my_user1234_accountId#matches`;
      const rs = match.getStoreUserMatchesId('test', 'my_user1234_accountId');
      expect(typeof rs).toEqual('string');
      expect(rs).toEqual(expectedValue);
    });
  });
  describe('getStoreMatchId Test', () => {
    it('should success', function () {
      const expectedValue = `pubg#test#matches#12419081`;
      const rs = match.getStoreMatchId('test', '12419081');
      expect(typeof rs).toEqual('string');
      expect(rs).toEqual(expectedValue);
    });
  });
  describe('storeUserMatches Test', () => {
    const id = 'pubg#test#my_user1234_accountId#matches';
    it('should success ', async () => {
      jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);
      const ddbSpy = jest.spyOn(storeDDB, 'getAllByDoubleKey').mockResolvedValue(new FnOkResult([]))
      const rs = await match.storeUserMatches('test', 'my_user1234_accountId', [
        {
          'id': '1',
          'type': 'custom'
        },
        {
          'id': '2',
          'type': 'match'
        }
      ]);
      expect(rs).toBeInstanceOf(FnOkResult)
      expect(rs.data).toEqual({"UnprocessedItems": {}})

      expect(ddbSpy.mock.calls.length).toEqual(1)
      expect(ddbSpy.mock.calls[0]).toEqual([id, '0', 1])
    });
    it('should fail: no more put item ', async () => {
      const timeSpy = jest.spyOn(Date.prototype, 'getTime').mockReturnValue(0);
      const ddbSpy = jest.spyOn(storeDDB, 'getAllByDoubleKey').mockResolvedValue(new FnOkResult([{
        id: id, sort: '1', item: {
          'id': '1',
          'type': 'custom'
        }
      }]));
      const rs = await match.storeUserMatches('test', 'my_user1234_accountId', [
        {
          'id': '1',
          'type': 'custom'
        }
      ]);
      expect(rs).toBeInstanceOf(FnFailResult)
      expect(rs.data).toEqual('NoMorePut');

      expect(ddbSpy.mock.calls.length).toEqual(1)
      expect(ddbSpy.mock.calls[0]).toEqual([id, '0', 1])
      expect(timeSpy.mock.calls.length).toEqual(1);
    });
    it('should fail: ddb any error ', async () => {
      jest.spyOn(storeDDB, 'getAllByDoubleKey').mockResolvedValue(new FnFailResult('NotFound'));
      const rs = await match.storeUserMatches('test', 'my_user1234_accountId', [
        {
          'id': '1',
          'type': 'custom'
        }
      ]);
      expect(rs).toBeInstanceOf(FnFailResult)
      expect(rs.data).toEqual('NotFound')
    });
  });


  describe('getOrStoreMatch Test', () => {
    // putBySingleKey,
    //   getBySingleKey,
    //   (async () => await getMatch(platform, matchId)),
    const itemData = {
      matchInfo: TestPubgAPIMatchesDetail,
      included: TestPubgMatchesIncluded
    };
    const sucData = {
      id: '1',
      item: {
        matchInfo: TestPubgAPIMatchesDetail,
        included: TestPubgMatchesIncluded
      },
    };
    jest.spyOn(storeDDB, 'putBySingleKey').mockResolvedValue(new FnOkResult({}));
    jest.spyOn(pubgAPIMatches, 'getMatch').mockResolvedValue(new FnOkResult(itemData));
    it('should success ', async () => {
      jest.spyOn(storeDDB, 'getBySingleKey').mockResolvedValue(new FnOkResult(sucData));
      const rs = await match.getOrStoreMatch('test', '1');
      expect(rs).toBeInstanceOf(FnOkResult)
      expect(rs.data).toEqual(match.matchSimplify(sucData.item))
    });

    it('should success: data not exist in db ', async () => {
      jest.spyOn(storeDDB, 'getBySingleKey').mockResolvedValueOnce(new FnFailResult('NotFound'));
      jest.spyOn(storeDDB, 'getBySingleKey').mockResolvedValueOnce(new FnOkResult(Object.assign({id: '2'}, sucData)));
      const rs = await match.getOrStoreMatch('test', '2');
      expect(rs).toBeInstanceOf(FnOkResult)
      expect(rs.data).toEqual(match.matchSimplify(Object.assign({id: '2'}, sucData).item));
    });
  });

  describe('matchCompare Test', () => {
    it('data not included target array', () => {
      const expectedValue = [{id: '3'}, {id: '2'}, {id: '1'}];
      const rs = matchAfterSlice({item: {id: '0'}}, expectedValue);
      expect(rs).toEqual(expectedValue);
    });

    it('data included target array', () => {
      const expectedValue = [{id: '3'}];
      const rs = matchAfterSlice({item: {id: '2'}}, [{id: '3'}, {id: '2'}, {id: '1'}]);
      expect(rs).toEqual(expectedValue);
    });

    it('data included target array & result will not exist', () => {
      const expectedValue = [];
      const rs = matchAfterSlice({item: {id: '3'}}, [{id: '3'}, {id: '2'}, {id: '1'}]);
      expect(rs).toEqual(expectedValue);
    });

    it('data is null', () => {
      const expectedValue = [{id: '3'}, {id: '2'}, {id: '1'}];
      const rs = matchAfterSlice(null, expectedValue);
      expect(rs).toEqual(expectedValue);
    });
  });
});
