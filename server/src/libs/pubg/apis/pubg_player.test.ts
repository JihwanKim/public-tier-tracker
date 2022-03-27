import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import {getPubgPlayerInfo} from "@libs/pubg/apis/pubg_players";
import * as requester from "@libs/pubg/apis/common/pubg_requester";
import {
  CommonError,
  CommonSuccess
} from "@libs/pubg/apis/common/pubg_requester";
import {
  PubgAPIPlayer,
  PubgAPIPlayerSearchError
} from "@libs/pubg/pubg_api_types";

jest.mock("@libs/pubg/apis/common/pubg_requester")


describe('Pubg Player Search by Name Test', () => {
  const sucData: Array<PubgAPIPlayer> = [
    {
      "type": "player",
      "id": "account.test1234",
      "attributes": {
        "name": "my_user1234",
        "stats": null,
        "titleId": "pubg",
        "shardId": "kakao",
        "patchVersion": ""
      },
      "relationships": {
        "assets": {
          "data": []
        },
        "matches": {
          "data": []
        }
      },
      "links": {
        "self": "https://api.pubg.com/shards/kakao/players/account.3d028c8349404afcb594e5abe6136476",
        "schema": ""
      }
    }
  ];
  const requireSucMock: CommonSuccess<Array<PubgAPIPlayer>> = {
    "data": sucData,
    "links": {
      "self": "https://api.pubg.com/shards/kakao/players?filter[playerNames]=my_user1234"
    },
    "meta": {}
  }
  const requireFailMock: CommonError<PubgAPIPlayerSearchError> = {
    "errors": [
      {
        "title": "Not Found",
        "detail": "No Players Found Matching Criteria"
      }
    ]
  }
  it('success', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnOkResult(requireSucMock));
    const result = await getPubgPlayerInfo('kakao', 'my_user1234');

    const expectedResult = 'my_user1234';
    expect((result as FnOkResult<PubgAPIPlayer>).data.attributes.name).toEqual(expectedResult);
  });
  it('fail', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnFailResult(requireFailMock));
    const result = await getPubgPlayerInfo('kakao', 'my_user1234');

    const expectedResult = 'Not Found';
    expect((result as FnFailResult<PubgAPIPlayerSearchError>).data.title).toEqual(expectedResult);
  });
});

