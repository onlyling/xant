import { useRef, useCallback, useEffect } from 'react';

/**
 * 组件是否已经被销毁了
 */
const useDestroyed = () => {
  const DestroyedRef = useRef(true);
  const getDestroyed = useCallback(() => DestroyedRef.current, []);

  useEffect(() => {
    DestroyedRef.current = false;

    return () => {
      if (__DEV__) {
        console.log('useDestroyed  ->  组件已经被销毁了');
      }
      DestroyedRef.current = true;
    };
  }, []);

  return getDestroyed;
};

export default useDestroyed;
