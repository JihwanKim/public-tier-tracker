import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import schema from './schema';
import {PubgAPIPlatform} from "@libs/pubg/pubg_api_types";
import {getUserMatchIds} from "@libs/pubg/logic/match";

const userMatches: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(event);
  const name = event.pathParameters.name;
  const platform = event.pathParameters.platform as PubgAPIPlatform;
  const sort: string | null = event.queryStringParameters.sort;
  const rs = await getUserMatchIds(platform, name, sort);
  return rs.toResponse();
};

export const main = middyfy(userMatches);
