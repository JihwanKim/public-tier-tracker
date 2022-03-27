export interface FnResult<Type> {
  data: Type;
  detail?: unknown;

  toResponse(): { 'statusCode': number, 'body': string }
}

export class FnOkResult<Type> implements FnResult<Type> {
  data: Type;

  constructor(data: Type) {
    this.data = data;
  }

  toResponse(): { 'statusCode': number, 'body': string } {
    return {
      statusCode: 200,
      body: JSON.stringify(this.data)
    }
  }
}

export class FnFailResult<Type> implements FnResult<Type> {
  data: Type;
  detail: object;

  constructor(error: Type, detail = {}) {
    this.data = error;
    this.detail = detail;
  }

  toResponse(): { 'statusCode': number, 'body': string } {
    return {
      statusCode: 409,
      body: JSON.stringify({error: this.data})
    }
  }
}
