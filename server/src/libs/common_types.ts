import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";

export type NotFoundError = 'NotFound'

export type NormalItem<Type> = {
  id: string,
  sort?: string,
  inserted_timestamp: number,
  item: Type,
}

export type ExpiredItem<Type> = {
  expired_timestamp: number,
} & NormalItem<Type>

export type AnyItem<Type> = NormalItem<Type> | ExpiredItem<Type>;

export type CommonSingleReturn<Type> =
  FnOkResult<AnyItem<Type> | Type>
  | FnFailResult<unknown>;

export type CommonArrayReturn<Type> =
  FnOkResult<Array<AnyItem<Type>> | Array<Type>>
  | FnFailResult<unknown>;

export type CommonReturn<Type> =
  CommonSingleReturn<Type> | CommonArrayReturn<Type>;