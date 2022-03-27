/* eslint-disable  @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-argument*/
import middy from "@middy/core"
import cors from '@middy/http-cors'
import middyJsonBodyParser from "@middy/http-json-body-parser"
import {
  customMiddleware
} from '@libs/custom_middleware'

export const middyfy = (handler) => {
  return middy(handler).use(customMiddleware()).use(cors()).use(middyJsonBodyParser())
}
