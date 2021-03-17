import { useState, useCallback } from 'react';

type UpdateStateParam<T> = Partial<T> | ((s: T) => T);

type UpdateState<T> = (p: UpdateStateParam<T>) => void;

/**
 * useState 类似 this.setState 可以传入部分字段更新
 * @param state 状态
 */
const useStateUpdate = <T>(state: T): [T, UpdateState<T>] => {
  const [localState, setLocalState] = useState<T>(state);
  const updateState = useCallback((s: UpdateStateParam<T>) => {
    setLocalState((ls) => {
      const value = typeof s === 'function' ? s(ls) : s;

      if (__DEV__) {
        console.log('typeof s === ' + typeof s);
        console.log('useStateUpdate new state  ->');
        console.log(value);
        console.log('time  ---->  ' + new Date().getTime());
      }

      if (typeof ls === 'object') {
        return {
          ...ls,
          ...value,
        };
      }

      return value as T;
    });
  }, []);

  return [localState, updateState];
};

export default useStateUpdate;
