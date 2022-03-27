import {FnFailResult, FnOkResult, FnResult} from "./fn_result";
// import Type = module
// import * as module from "module";

type FnState = Record<string, unknown>

type FnRunner<Type> = (state?: Readonly<FnState>) => FnResult<Type> | FnOkResult<Type> | FnFailResult<unknown>
type FnRunnerPromise<Type> = (state?: Readonly<FnState>) => Promise<FnResult<Type> | FnOkResult<Type> | FnFailResult<unknown>>

type FnRunnerAll<Type> = FnRunner<Type> | FnRunnerPromise<Type>

interface FnWorker<Type> {
  runLambda: FnRunnerAll<Type>
  bindKey?: string
}

class FnBind<Type> implements FnWorker<Type> {
  bindKey: string;
  runLambda: FnRunnerAll<Type>

  constructor(bindKey: string, runLambda: FnRunnerAll<Type>) {
    this.bindKey = bindKey;
    this.runLambda = runLambda;
  }
}

class FnDo<Type> implements FnWorker<Type> {
  runLambda: FnRunnerAll<Type>;

  constructor(runLambda: FnRunnerAll<Type>) {
    this.runLambda = runLambda;
  }
}

class FnAfter<Type> implements FnWorker<Type> {
  runLambda: FnRunnerAll<Type>;

  constructor(runLambda: FnRunnerAll<Type>) {
    this.runLambda = runLambda;
  }
}

export class FnFlow {
  private state: FnState
  private workerFunctions: FnWorker<unknown>[];

  constructor() {
    this.state = {};
    this.workerFunctions = [];
  }

  addBind<Type>(bindKey: string, bindLambda: FnRunnerAll<Type>): void {
    this.workerFunctions = this.workerFunctions.concat(new FnBind(bindKey, bindLambda));
  }

  addDo<Type>(doLambda: FnRunnerAll<Type>): void {
    this.workerFunctions = this.workerFunctions.concat(new FnDo(doLambda));
  }

  addAfter<Type>(doLambda: FnRunnerAll<Type>): void {
    this.workerFunctions = this.workerFunctions.concat(new FnAfter(doLambda));
  }

  async asyncRun(): Promise<FnResult<unknown>> {
    let i = 0;
    for (const worker of this.workerFunctions) {
      const workerFn: FnRunnerAll<unknown> = worker.runLambda;
      const rs: unknown = await workerFn(this.state);
      if (rs instanceof FnOkResult) {
        if (worker instanceof FnBind) {
          this.state[worker.bindKey] = rs.data;
        }
        if (worker instanceof FnDo) {
          this.state['result'] = rs;
        }
      }
      if (rs instanceof FnFailResult) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.log(`i ${i + 1} is fail! \ndata:${rs.data} \ndetail:${JSON.stringify(rs.detail)}`)
        return rs;
      }
      i++;
    }
    return this.state['result'] as FnOkResult<unknown>;
  }
}
