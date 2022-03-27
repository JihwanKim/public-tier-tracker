import {DocumentClient} from 'aws-sdk/clients/dynamodb';
import {FnFailResult, FnOkResult, FnResult} from "@libs/flow/fn_result";
import {AnyItem, CommonArrayReturn, CommonReturn} from "@libs/common_types";

const docClient = new DocumentClient({region: 'ap-northeast-2'});

const singleKeyTable = `${process.env.STAGE}-tier-tracker-single-key`;
const doubleKeyTable = `${process.env.STAGE}-tier-tracker-double-key`;

type BatchReadReturn = void | DocumentClient.BatchGetItemOutput
type BatchWriteReturn = void | DocumentClient.BatchWriteItemOutput

async function _batchChunk<Type>(items: Type[], targetFn: (items: Type[]) => Promise<BatchReadReturn | BatchWriteReturn | FnFailResult<unknown>>, chunkSize = 50):
  Promise<Array<BatchReadReturn | BatchWriteReturn> | FnFailResult<unknown>> {
  const allData = [];
  while (items.length !== 0) {
    const currentItems: Type[] = [];
    for (let i = 0; i < chunkSize && items.length !== 0; i++) {
      currentItems.push(items.shift());
    }
    const data = await targetFn(currentItems);
    if (data instanceof FnFailResult) {
      return data;
    }
    allData.push(data);
  }
  return allData as Array<unknown>;
}

function _resultDataHandler(fnName: string, id: string, data: void | DocumentClient.GetItemOutput | DocumentClient.BatchGetItemOutput): CommonReturn<unknown> {
  if (typeof data === "object") {
    if (Object.keys(data).length == 0) {
      return new FnFailResult(`NotFound`, {
        'table': singleKeyTable, 'id': id,
      });
    } else {
      const batchGetItems = (data as DocumentClient.BatchGetItemOutput);
      const getItem = (data as DocumentClient.GetItemOutput);
      if (batchGetItems.Responses) {
        const targetTables = Object.keys(batchGetItems.Responses);
        const targetResponses = batchGetItems.Responses[targetTables[0]];
        return new FnOkResult(Object.values(targetResponses) as unknown as Array<AnyItem<unknown>>);
      } else {
        return new FnOkResult(getItem.Item as AnyItem<unknown>);
      }
    }
  } else {
    return new FnFailResult(`${fnName} on fail: db err`, {
      'table': singleKeyTable, 'id': id,
    });
  }
}


export async function putBySingleKey(id: string, items: object, expiredInMills = 0): Promise<CommonReturn<unknown>> {
  const fnName = 'putBySingleKey';
  const item = {id: id, inserted_timestamp: new Date().getTime(), item: items};
  if (expiredInMills !== 0) {
    Object.assign(item, {expired_timestamp: new Date().getTime() + expiredInMills})
  }

  const params = {
    TableName: singleKeyTable,
    Item: item
  };
  const rs = await docClient.put(params).promise();
  if (rs.$response.error) {
    return new FnFailResult(`${fnName} fail!`, {
      'table': singleKeyTable, 'id': id
    });
  }
  return new FnOkResult(rs.$response.data as AnyItem<unknown>);
}

export async function getBySingleKey(id: string): Promise<CommonReturn<unknown>> {
  const fnName = 'getBySingleKey';
  const params = {
    TableName: singleKeyTable,
    Key: {id: id},
  };
  const rs = await docClient.get(params).promise();
  if (rs.$response.error) {
    return new FnFailResult(`${fnName} fail!`, {
      'table': singleKeyTable, 'id': id,
    });
  }

  const data: void | DocumentClient.GetItemOutput = rs.$response.data
  return _resultDataHandler(fnName, id, data);
}

export async function putByDoubleKey(id: string, sort: string, putItems: object, expiredInMills = 0): Promise<FnResult<unknown>> {
  const fnName = 'putByDoubleKey';
  const item = {
    id: id,
    sort: sort,
    inserted_timestamp: new Date().getTime(),
    item: putItems
  }

  if (expiredInMills !== 0) {
    Object.assign(item, {expired_timestamp: new Date().getTime() + expiredInMills})
  }

  const params = {
    TableName: doubleKeyTable,
    Item: item,
  }
  const rs = await docClient.put(params).promise();

  if (rs.$response.error) {
    return new FnFailResult(`${fnName} fail!`, {
      'table': singleKeyTable, 'id': id, 'sort': sort
    });
  }
  return new FnOkResult(rs.$response.data);
}

// sort key 필수
//
export type BatchDoubleKeyItem<Type> = {
  sort: string,
  item: Type
};

export type BatchResult = {
  UnprocessedItems: object
}

export async function putBatchByDoubleKey(id: string, items: Array<BatchDoubleKeyItem<unknown>>, expiredInMills = 0): Promise<FnOkResult<BatchResult> | FnFailResult<unknown>> {
  if (items.length === 0) {
    return new FnOkResult({UnprocessedItems: {}});
  }
  const fnName = 'putByDoubleKey';
  const putItems = items.map((element): Record<string, unknown> => {
    const item = {
      PutRequest: {
        Item: {
          id: id,
          sort: element.sort,
          inserted_timestamp: new Date().getTime(),
          item: element.item,
        }
      }
    };
    if (expiredInMills !== 0) {
      Object.assign(item, {expired_timestamp: new Date().getTime() + expiredInMills})
    }
    return item;
  });

  const perChunk = async (currentPutItems: object[]): Promise<BatchWriteReturn | FnFailResult<unknown>> => {
    const params = {
      RequestItems: {
        [doubleKeyTable]: currentPutItems
      }
    };
    const rs = await docClient.batchWrite(params).promise();

    if (rs.$response.error) {
      return new FnFailResult(`${fnName} fail!`, {
        'table': singleKeyTable, 'id': id, 'items': items
      });
    }
    return rs.$response.data;
  }

  const allData = await _batchChunk(putItems, perChunk, 25);
  if (allData instanceof FnFailResult) {
    return allData;
  }

  const batchRs: DocumentClient.BatchWriteItemOutput = allData[0] as DocumentClient.BatchWriteItemOutput;
  allData.forEach((_data: DocumentClient.BatchWriteItemOutput) => Object.assign(batchRs.UnprocessedItems, _data.UnprocessedItems));

  return new FnOkResult({UnprocessedItems: batchRs.UnprocessedItems});
}

export async function getByDoubleKey(id: string, sort: string): Promise<CommonReturn<unknown>> {
  const fnName = 'getByDoubleKey';
  const params = {
    TableName: doubleKeyTable,
    Key: {
      id: id, sort: sort
    },
  };
  const rs = await docClient.get(params).promise();
  if (rs.$response.error) {
    return new FnFailResult(`${fnName} fail!`, {
      'table': singleKeyTable, 'id': id, 'sort': sort
    });
  }

  const data: void | DocumentClient.GetItemOutput = rs.$response.data
  return _resultDataHandler(fnName, id, data);
}

async function query(fnName: string, id: string, params: DocumentClient.QueryInput):
  Promise<CommonArrayReturn<unknown>> {
  const rs = await docClient
    .query(params)
    .promise();

  if (rs.$response.error) {
    return new FnFailResult(`${fnName} fail!`, {
      'table': singleKeyTable, 'id': id
    });
  }

  const data: void | DocumentClient.QueryOutput = rs.$response.data;
  if (typeof data === "object") {
    return new FnOkResult(data.Items) as FnOkResult<Array<AnyItem<unknown>>>;
  } else {
    return new FnFailResult(`${fnName} not exist item!`, {
      'table': singleKeyTable, 'id': id
    });
  }
}

export async function getAllByDoubleKey(id: string, sort?: string, limit = 20): Promise<CommonArrayReturn<unknown>> {
  const fnName = 'getAllByDoubleKey';

  const condition = sort != null ? 'id = :hashKey and sort < :sortKey' : 'id = :hashKey';
  const attributeValues = sort != null ? {
    ':hashKey': id,
    ':sortKey': sort
  } : {':hashKey': id};

  return await query(fnName, id, {
    TableName: doubleKeyTable,
    KeyConditionExpression: condition,
    ExpressionAttributeValues: attributeValues,
    ScanIndexForward: false,
    Limit: limit
  });
}


export async function getAllByDoubleKeyWithSorts(id: string, sorts: string[]):
  Promise<CommonArrayReturn<unknown>> {
  const fnName = 'getAllByDoubleKey';
  const perChunk = async (currentSorts: string[]): Promise<BatchReadReturn | FnFailResult<unknown>> => {
    const getItems = currentSorts.map((sort) => {
      return {
        id: id,
        sort: sort,
      };
    });

    const params = {
      RequestItems: {
        [doubleKeyTable]: {
          Keys: getItems
        }
      }
    };
    const rs = await docClient.batchGet(params).promise();

    if (rs.$response.error) {
      return new FnFailResult(`${fnName} fail!`, {
        'table': singleKeyTable, 'id': id, 'sorts': sorts
      });
    }

    return rs.$response.data
  }

  const allData = await _batchChunk(sorts, perChunk);
  if (allData instanceof FnFailResult) {
    return allData;
  }

  const allParseResult = allData.map((_data: DocumentClient.BatchGetItemOutput) => _resultDataHandler(fnName, id, _data));

  return new FnOkResult(allParseResult.map((element) => element.data).flat());
}


// require test and get all by double key logic change
// temp function!!!!
export async function testDeleteAllDoubleKey(id: string,): Promise<FnOkResult<BatchResult> | FnFailResult<unknown>> {
  const allItems = await getAllByDoubleKey(id, null, 5000);
  if (allItems instanceof FnFailResult) {
    return new FnOkResult({
                            UnprocessedItems: {}
                          });
  }

  if (allItems.data.length === 0) {
    return new FnOkResult({
                            UnprocessedItems: {}
                          });
  }

  const fnName = 'putByDoubleKey';
  const delItems = allItems.data.map((item: AnyItem<unknown>) => {
    return {
      DeleteRequest: {
        Key: {
          id: item.id,
          sort: item.sort,
        }
      }
    }
  });

  const perChunk = async (currentDelItems: object[]): Promise<BatchWriteReturn | FnFailResult<unknown>> => {
    const params = {
      RequestItems: {
        [doubleKeyTable]: currentDelItems
      }
    };
    const rs = await docClient.batchWrite(params).promise();

    if (rs.$response.error) {
      return new FnFailResult(`${fnName} fail!`, {
        'table': singleKeyTable, 'id': id, 'items': currentDelItems
      });
    }
    return rs.$response.data;
  }

  const allData = await _batchChunk(delItems, perChunk, 25);
  if (allData instanceof FnFailResult) {
    return allData;
  }

  const batchRs: DocumentClient.BatchWriteItemOutput = allData[0] as DocumentClient.BatchWriteItemOutput;
  allData.forEach((_data: DocumentClient.BatchWriteItemOutput) => Object.assign(batchRs.UnprocessedItems, _data.UnprocessedItems));

  return new FnOkResult({UnprocessedItems: batchRs.UnprocessedItems});
}
