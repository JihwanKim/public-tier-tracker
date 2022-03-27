import type {AWS} from '@serverless/typescript';

import hello from '@functions/hello';
import users from "@functions/lol/users";
import {
  pubgMatches,
  pubgPlatforms,
  pubgSeasons,
  pubgUserMatches,
  pubgUsers,
  pubgUsersStats
} from "@functions/index";

const serverlessConfiguration: AWS = {
  service: 'tier-tracker',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-local-dev-server'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ap-northeast-2',
    stage: 'dev',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      STAGE: '${self:custom.stage}',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iam: {
      role: {
        name: '${self:custom.stage}-tier-tracker-role',
        statements: [
          {
            Effect: 'Allow',
            Resource: 'arn:aws:dynamodb:ap-northeast-2:479338854515:table/${self:custom.stage}-tier-tracker-single-key',
            Action: ['dynamoDB:BatchGetItem', 'dynamoDB:BatchWriteItem', 'dynamoDB:Query', 'dynamoDB:UpdateItem', 'dynamodb:GetItem', 'dynamodb:PutItem'],
          },
          {
            Effect: 'Allow',
            Resource: 'arn:aws:dynamodb:ap-northeast-2:479338854515:table/${self:custom.stage}-tier-tracker-double-key',
            Action: ['dynamoDB:BatchGetItem', 'dynamoDB:BatchWriteItem', 'dynamoDB:Query', 'dynamoDB:UpdateItem', 'dynamodb:GetItem', 'dynamodb:PutItem'],
          },
        ],
      }
    },
  },
  // import the function via paths
  functions: {
    hello,
    users,
    pubgUsers,
    pubgMatches,
    pubgUserMatches,
    pubgPlatforms,
    pubgSeasons,
    pubgUsersStats
  },
  package: {individually: true},
  custom: {
    stage: '${opt:stage, self:provider.stage}',
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: {'require.resolve': undefined},
      platform: 'node',
      concurrency: 10,
    },
  },
  resources: {
    Resources: {
      DynamoDbSingleTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: '${self:custom.stage}-tier-tracker-single-key',
          BillingMode: 'PAY_PER_REQUEST',
          AttributeDefinitions: [
            {
              AttributeName: 'id',
              AttributeType: 'S'
            },
          ],
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH'
            },
          ],
        },
      },
      DynamoDbDoubleTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: '${self:custom.stage}-tier-tracker-double-key',
          BillingMode: 'PAY_PER_REQUEST',
          AttributeDefinitions: [
            {
              AttributeName: 'id',
              AttributeType: 'S'
            },
            {
              AttributeName: 'sort',
              AttributeType: 'S'
            }
          ],
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH'
            },
            {
              AttributeName: 'sort',
              KeyType: 'RANGE'
            },
          ],
        },
      }
    }
  }
};

module.exports = serverlessConfiguration;
