import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import schema from './schema';
import {getAllSeasons} from "@libs/pubg/core/season";

const matches: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  const rs = await getAllSeasons();
  return rs.toResponse();
};

export const main = middyfy(matches);
