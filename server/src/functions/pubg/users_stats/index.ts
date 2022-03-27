// import schema from './schema';
import {handlerPath} from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'pubg/{platform}/users/{name}/ranks/{season}',
        // request: {
        //   schemas: schema,
        // },
      },
    },
  ],
};
