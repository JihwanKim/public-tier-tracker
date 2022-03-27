import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import schema from './schema';
import {PubgAPIPlatform} from "@libs/pubg/pubg_api_types";
import {getUserInfo} from "@libs/pubg/logic/user";

const users: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(event);
  const name = event.pathParameters.name;
  const platform = event.pathParameters.platform as PubgAPIPlatform;
  const refresh: boolean = ((event.queryStringParameters['refresh'] != null ? event.queryStringParameters.refresh : 'false') === 'true');
  const rs = await getUserInfo(platform, name, refresh);
  return rs.toResponse();
};

export const main = middyfy(users);
