import {
  CommonError,
  CommonSuccess,
  get
} from "@libs/pubg/apis/common/pubg_requester";
import axios from 'axios';
import { FnFailResult, FnOkResult } from "@libs/flow/fn_result";

jest.mock("axios")


describe('Pubg Requester Test', () => {
  const onSuc = {
    status: 200,
    statusText: 'OK',
    headers: {
      'content-type': 'application/json',
      'content-length': '456',
      connection: 'close',
      date: 'Wed, 23 Feb 2022 14:58:57 GMT',
      'x-ratelimit-limit': '10',
      'x-ratelimit-remaining': '8',
      'x-ratelimit-reset': '1645628397',
      'x-request-id': 'e836adb6-7832-4d62-8a1c-f27d3a6dc4f8',
      'x-cache': 'Miss from cloudfront',
      via: '1.1 5a3cb1863066fab06fd1de3d0f5ac7cc.cloudfront.net (CloudFront)',
      'x-amz-cf-pop': 'ICN55-C1',
      'x-amz-cf-id': 'xF-977ZyfUt7y5PczDRf68jh6-q1oRu__ExBRkvoIYb0HX26b0-JgQ=='
    },
    config: {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: '{required:PUBG_api_key}',
        'User-Agent': 'axios/0.26.0'
      },
      params: { 'filter[playerNames]': 'my_user1234' },
      method: 'get',
      url: 'https://api.pubg.com/shards/kakao/players',
      data: undefined
    },
    data: {
      data: [{}],
      links: {
        self: 'https://api.pubg.com/shards/kakao/players?filter[playerNames]=my_user1234'
      },
      meta: {}
    }
  };
  const onFail = {
    config: {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: '{required:PUBG_api_key}',
        'User-Agent': 'axios/0.26.0'
      },
      params: { 'filter[playerNames]': 'my_user12342' },
      method: 'get',
      url: 'https://api.pubg.com/shards/kakao/players',
      data: null,
    },
    response: {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'content-type': 'application/vnd.api+json',
        'content-length': '80',
        connection: 'close',
        date: 'Wed, 23 Feb 2022 15:09:07 GMT',
        'x-ratelimit-limit': '10',
        'x-ratelimit-remaining': '6',
        'x-ratelimit-reset': '1645628987',
        'x-request-id': 'ba1d8486-750e-4afc-8f15-a42ff3641671',
        'x-cache': 'Error from cloudfront',
        via: '1.1 242ecb14dc0782deec482a730069d5e4.cloudfront.net (CloudFront)',
        'x-amz-cf-pop': 'ICN54-C1',
        'x-amz-cf-id': 'A5Va-h3mh4mOY3_TVR8YYYf580iQAx4aeeMi1FOd9_2b_rSyoYQzow=='
      },
      config: {
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        method: 'get',
        url: 'https://api.pubg.com/shards/kakao/players',
        data: null
      },
      data: { errors: [] }
    },
    isAxiosError: true,
    toJSON: []
  };
  it('success', async () => {

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const mockMyFunction = axios.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new Promise((resolve) => resolve(onSuc)));

    const result = await get(`shards/kakao/players`, { ['filter[playerNames]']: 'my_user1234' });
    const expectedResult = [{}];
    expect((result as FnOkResult<CommonSuccess<object>>).data.data).toEqual(expectedResult);
  });
  it('fail', async () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const mockMyFunction = axios.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new Promise((_, reject) => reject(onFail)));
    const result = await get(`shards/kakao/players`, { ['filter[playerNames]']: 'my_user12342' });
    const expectedResult = [];
    expect((result as FnFailResult<CommonError<object>>).data.errors).toEqual(expectedResult);
  });
});

