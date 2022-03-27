import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import schema from './schema';
import {PubgAPIPlatform} from "@libs/pubg/pubg_api_types";
import {getMatches} from "@libs/pubg/logic/match";

const matches: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(event);
  const platform = event.pathParameters.platform as PubgAPIPlatform;
  const matchIds = event.queryStringParameters.matchIds;
  const rs = await getMatches(platform, matchIds.split(',').map((ele) => ele.trim()));
  return rs.toResponse();
};

export const main = middyfy(matches);
