export function isCanRefresh(timestamp: number): boolean {
  const time = new Date().getTime();
  return ((timestamp + 60 * 1000) - time) < 0;
}

export function makeKey(...strList: string[]): string {
  return strList.join('#');
}

export function zip<Type1, Type2>(a: Array<Type1>, b: Array<Type2>): Array<Array<Type1 | Type2>> {
  const arr: Array<Array<Type1 | Type2>> = [];
  for (let i = 0; i < a.length; i++) {
    arr.push([a[i], b[i]]);
  }
  return arr;
}