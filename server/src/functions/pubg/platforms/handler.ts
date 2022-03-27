import {middyfy} from '@libs/lambda';

import {FnOkResult} from "@libs/flow/fn_result";
import {getAllPlatforms} from "@libs/pubg/core/platform";

const matches: () => { statusCode: number; body: string } = () => {
  return new FnOkResult({platforms: getAllPlatforms()}).toResponse();
};

export const main = middyfy(matches);
