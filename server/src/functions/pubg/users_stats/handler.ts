import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import schema from './schema';
import {PubgAPIPlatform, PubgAPISeason} from "@libs/pubg/pubg_api_types";
import {getRankInfo} from "@libs/pubg/logic/season";

const userMatches: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(event);
  const name = event.pathParameters.name;
  const season = event.pathParameters.season as PubgAPISeason;
  const platform = event.pathParameters.platform as PubgAPIPlatform;
  const rank = event.queryStringParameters.rank === "true";
  const rs = await getRankInfo(platform, name, season, rank);
  return rs.toResponse();
};

export const main = middyfy(userMatches);
