// import normalizeText from './normalize-text';
// import normalizeSize from './normalize-size';
export { default as hex2rgba } from './hex2rgba';
export { getNextZIndex } from './z-index';

/** 空函数，用于一些没有必要实际需要的回调，同时避免抛出错误 */
export function noop() {}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

// export default {
//   // normalizeText,
//   // normalizeSize,
//   // getNextZIndex,
// };
