import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';

import schema from './schema';

// eslint-disable-next-line @typescript-eslint/require-await
const users: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    message: `user ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(users);
