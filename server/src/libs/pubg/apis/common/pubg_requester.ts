import axios, {AxiosError} from 'axios'
import {FnFailResult, FnOkResult} from '@libs/flow/fn_result';
import {
  PubgAPIMatchIncluded,
  PubgAPIPlayerSearchError
} from "@libs/pubg/pubg_api_types";

const apiKey = '{required:api_key}'
// Accept-Encoding: gzip
const headers = {
  'Authorization': apiKey,
  'Accept': 'application/vnd.api+json',
  'Accept-Encoding': 'gzip'
};
// example : https://api.pubg.com/shards/kakao/players?filter[playerNames]=my_user1234
// kakao, stedia, psn, steam, xbox

export type CommonSuccess<Type> = {
  'data': Array<Type> | Type,
  'included'?: PubgAPIMatchIncluded,
  'links': {
    'self': string
  },
  'meta': object
}

// export type CommonSuccessForNormal<Type> = {
//   'data': Array<Type> | Type,
//   'included'?: PubgMatchIncluded,
//   'links': {
//     'self': string
//   },
//   'meta': object
// }
// export type CommonSuccessForMatch<Type, Type2> = {
//   'data': Array<Type> | Type,
//   'included': Array<Type2>,
//   'links': {
//     'self': string
//   },
//   'meta': object
// }

export type CommonError<Type> = {
  'errors': Array<Type>
}
// axios.interceptors.request.use(request => {
//   console.log('Starting Request', JSON.stringify(request, null, 2))
//   return request
// })

// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   console.log(config)
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

export async function get(path: string, params?: object): Promise<FnOkResult<CommonSuccess<unknown>> | FnFailResult<CommonError<PubgAPIPlayerSearchError>>> {
  const url = `https://api.pubg.com/${path}`;
  return await axios.get(url, {
    headers: headers,
    params: params,
  }).then((suc) => {
    // it will return json
    return new FnOkResult(suc.data);
  }).catch((err: AxiosError) => {
    return new FnFailResult(err.response.data, {path: path, params: params});
  });
}
