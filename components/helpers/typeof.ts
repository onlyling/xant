const isType = (
  t:
    | 'Array'
    | 'Object'
    | 'Function'
    | 'String'
    | 'Number'
    | 'Null'
    | 'Undefined',
) => (v: any) => Object.prototype.toString.call(v) === `[object ${t}]`;

/** 是数组 */
export const isArray = <T>(v: T[]): v is T[] => isType('Array')(v);

/** 是对象 */
export const isObject = (v: unknown): v is Record<any, any> =>
  isType('Object')(v);

/** 是函数 */
export const isFunction = (v: any): v is Function => isType('Function')(v);

/** 是一个 Promise */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
