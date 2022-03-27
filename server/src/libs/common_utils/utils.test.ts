import {isCanRefresh, makeKey} from "@libs/common_utils/utils";


describe('Utils Test', () => {
  it('isCanRefresh: true', () => {
    const currentTime = new Date().getTime();
    const result = isCanRefresh(currentTime - 61 * 1000);

    const expectedResult = true;
    expect(result).toEqual(expectedResult);
  });
  it('isCanRefresh: false', () => {
    const currentTime = new Date().getTime();
    const result = isCanRefresh(currentTime);

    const expectedResult = false;
    expect(result).toEqual(expectedResult);
  });

  it('isCanRefresh: true', () => {
    const result = makeKey('a', 'b', 'c');

    expect(result).toEqual('a#b#c');
  });
});