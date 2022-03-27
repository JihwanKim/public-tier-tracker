import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import * as requester from "@libs/pubg/apis/common/pubg_requester";
import {
  CommonError,
  CommonSuccess
} from "@libs/pubg/apis/common/pubg_requester";
import {
  PubgAPICustomMatchInfo,
  PubgAPIMatchIncluded,
  PubgAPIMatchInfo,
  PubgAPIPlayerSearchError, PubgAPIErrorForNotFound
} from "@libs/pubg/pubg_api_types";
import {getMatch} from "@libs/pubg/apis/pubg_matches";
import {
  TestPubgMatchesIncluded,
  TestPubgAPIMatchesDetail
} from "@libs/pubg/apis/pubg_matches.test.data";

jest.mock("@libs/pubg/apis/common/pubg_requester")


describe('Pubg Player Search by Name Test', () => {
  const sucData: PubgAPIMatchInfo = TestPubgAPIMatchesDetail;
  const included: PubgAPIMatchIncluded = TestPubgMatchesIncluded;
  const requireSucMock: CommonSuccess<PubgAPIMatchInfo> = {
    "data": sucData,
    "included": included,
    "links": {
      "self": "https://api.pubg.com/shards/kakao/players?filter[playerNames]=my_user1234"
    },
    "meta": {}
  }
  const requireFailMock: CommonError<PubgAPIErrorForNotFound> = {
    "errors": [
      {
        "title": "Not Found",
      }
    ]
  }
  it('success', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnOkResult(requireSucMock));
    const result = await getMatch('kakao', 'cd6f982a-36de-49e5-bca8-88d4da69f174');

    const expectedResult: PubgAPICustomMatchInfo = {
      matchInfo: sucData,
      included: included
    };
    expect((result as FnOkResult<PubgAPIMatchInfo>).data).toEqual(expectedResult);
  });
  it('fail', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnFailResult(requireFailMock));
    const result = await getMatch('kakao', 'cd6f982a-36de-49e5-bca8-88d4da69f174');

    const expectedResult = 'Not Found';
    expect((result as FnFailResult<PubgAPIPlayerSearchError>).data.title).toEqual(expectedResult);
  });
});

