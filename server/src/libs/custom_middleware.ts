/* eslint-disable  @typescript-eslint/explicit-function-return-type,@typescript-eslint/require-await,@typescript-eslint/restrict-template-expressions */
const defaults = {}

export const customMiddleware = (opts = {}) => {
  const options = {...defaults, ...opts};

  const customMiddlewareBefore = async (request) => {
    // might read options
    options['start_timestamp'] = new Date().getTime();
    console.log(`==> new request execute! ${new Date()}`);
    console.log(`================request info================\n`, request, `\n========================================`);
  }
  const customMiddlewareAfter = async () => {
    // might read options
    options['end_timestamp'] = new Date().getTime();
    options['latency'] = options['end_timestamp'] - options['start_timestamp'];
    console.log(`latency: ${options['latency']}ms`);
  }
  const customMiddlewareOnError = async () => {
    // might read options
    options['end_timestamp'] = new Date().getTime();
    options['latency'] = options['start_timestamp'] - options['end_timestamp']
    console.log(`err latency: ${options['latency']}ms`);
  }

  return {
    // Having descriptive function names will allow for easier tracking of performance bottlenecks using @middy/core/profiler
    before: customMiddlewareBefore,
    after: customMiddlewareAfter,
    onError: customMiddlewareOnError
  }
}