import {FnFlow} from "@libs/flow/fnflow";
import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";


describe('FnFlow Test', () => {
  it('success', async () => {
    const fnFlow = new FnFlow();
    fnFlow.addBind('hello', () => {
      return new FnOkResult('hello');
    })
    fnFlow.addDo((state) => {
      return new FnOkResult(state['hello']);
    })
    fnFlow.addAfter((state) => {
      return new FnOkResult(state['hello']);
    })

    const result = await fnFlow.asyncRun();

    const expectedResult = 'hello';
    expect(result.data).toEqual(expectedResult);
  });

  it('success: same key rebind', async () => {
    const fnFlow = new FnFlow();
    fnFlow.addBind('hello', () => {
      return new FnOkResult('hello');
    })
    fnFlow.addBind('hello', () => {
      return new FnOkResult('hello2');
    })
    fnFlow.addDo((state) => {
      return new FnOkResult(state['hello']);
    })

    const result = await fnFlow.asyncRun();

    const expectedResult = 'hello2';
    expect(result.data).toEqual(expectedResult);
  });

  it('success: do result rebind', async () => {
    const fnFlow = new FnFlow();
    fnFlow.addDo(() => {
      return new FnOkResult('hello');
    })
    fnFlow.addDo(() => {
      return new FnOkResult('new_value');
    })

    const result = await fnFlow.asyncRun();

    const expectedResult = 'new_value';
    expect(result.data).toEqual(expectedResult);
  });

  it('success: with await function', async () => {
    const awaitFn: () => Promise<FnOkResult<string>> = () => new Promise((resolve) => {
      resolve(new FnOkResult('async hello'));
    });

    const fnFlow = new FnFlow();
    fnFlow.addDo(async () => {
      return await awaitFn();
    })

    const result = await fnFlow.asyncRun();

    const expectedResult = 'async hello';
    expect(result.data).toEqual(expectedResult);
  });

  it('fail: at bind', async () => {
    const fnFlow = new FnFlow();
    fnFlow.addBind('hello', () => {
      return new FnFailResult('anyErr', {error: 'detail_reason'});
    })
    fnFlow.addDo((state) => {
      return new FnOkResult(state['hello']);
    })

    const result = await fnFlow.asyncRun();
    expect(result).toBeInstanceOf(FnFailResult)

    const expectedResult = 'anyErr';
    expect(result.data).toEqual(expectedResult);
    expect(result.detail).toEqual({error: 'detail_reason'});
  });

  it('fail: at do', async () => {
    const fnFlow = new FnFlow();
    fnFlow.addDo(() => {
      return new FnFailResult('anyErr', {error: 'detail_reason'});
    })

    const result = await fnFlow.asyncRun();
    expect(result).toBeInstanceOf(FnFailResult)

    const expectedResult = 'anyErr';
    expect(result.data).toEqual(expectedResult);
    expect(result.detail).toEqual({error: 'detail_reason'});
  });

  it('fail: at after', async () => {
    const fnFlow = new FnFlow();
    fnFlow.addDo(() => {
      return new FnOkResult('hello');
    })
    fnFlow.addAfter(() => {
      return new FnFailResult('anyErr', {error: 'detail_reason'});
    })

    const result = await fnFlow.asyncRun();
    expect(result).toBeInstanceOf(FnFailResult)

    const expectedResult = 'anyErr';
    expect(result.data).toEqual(expectedResult);
    expect(result.detail).toEqual({error: 'detail_reason'});
  });
});
