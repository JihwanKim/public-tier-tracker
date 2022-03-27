import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import * as requester from "@libs/pubg/apis/common/pubg_requester";
import {
  CommonError,
  CommonSuccess
} from "@libs/pubg/apis/common/pubg_requester";
import {
  PubgAPIMasteryForSurvival,
  PubgAPIMasteryForWeapons,
  PubgAPIPlayerSearchError,
  PubgAPIErrorForNotFound
} from "@libs/pubg/pubg_api_types";
import {
  TestPubgMasteryWeapon,
  TestPubgMasterySurvival
} from "@libs/pubg/apis/pubg_mastery.test.data";
import {
  getMasteryForSurvival,
  getMasteryForWeapons
} from "@libs/pubg/apis/pubg_mastery";

jest.mock("@libs/pubg/apis/common/pubg_requester")


describe('Pubg Mastery: Weapons Test', () => {
  const sucData: PubgAPIMasteryForWeapons = TestPubgMasteryWeapon
  const requireSucMock: CommonSuccess<PubgAPIMasteryForWeapons> = {
    "data": sucData,
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
    const result = await getMasteryForWeapons('kakao', 'account.test1234');
    expect((result as FnOkResult<PubgAPIMasteryForWeapons>).data).toEqual(sucData);
  });
  it('fail', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnFailResult(requireFailMock));
    const result = await getMasteryForWeapons('kakao', 'account.test1234');

    const expectedResult = 'Not Found';
    expect((result as FnFailResult<PubgAPIPlayerSearchError>).data.title).toEqual(expectedResult);
  });
});


describe('Pubg Mastery: Survival Test', () => {
  const sucData: PubgAPIMasteryForSurvival = TestPubgMasterySurvival
  const requireSucMock: CommonSuccess<PubgAPIMasteryForSurvival> = {
    "data": sucData,
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
    const result = await getMasteryForSurvival('kakao', 'account.test1234');
    expect((result as FnOkResult<PubgAPIMasteryForSurvival>).data).toEqual(sucData);
  });
  it('fail', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnFailResult(requireFailMock));
    const result = await getMasteryForSurvival('kakao', 'account.test1234');

    const expectedResult = 'Not Found';
    expect((result as FnFailResult<PubgAPIErrorForNotFound>).data.title).toEqual(expectedResult);
  });
});

