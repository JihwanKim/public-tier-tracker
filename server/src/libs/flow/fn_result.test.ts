import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";


describe('FnResult Test', () => {
  it('FnOK Test', () => {
    const ok = new FnOkResult({rs: 'hello'});
    expect(ok.data).toEqual({rs: 'hello'});
    const expect_data_for_response = {
      statusCode: 200,
      body: JSON.stringify({rs: 'hello'})
    };
    expect(ok.toResponse()).toEqual(expect_data_for_response);
  });
  it('FnFail Test', () => {
    const failResult = new FnFailResult({err: 'any_reason'}, {reason: 'hello world!'});
    expect(failResult.data).toEqual({err: 'any_reason'});
    const expect_data_for_response = {
      statusCode: 409,
      body: JSON.stringify({error: {err: 'any_reason'}})
    };
    expect(failResult.toResponse()).toEqual(expect_data_for_response);
  })
  ;
});
