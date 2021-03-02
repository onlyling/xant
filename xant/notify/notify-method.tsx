import React, { useState, useEffect, memo } from 'react';

import { NotifyMethodProps } from './interface';
import Notify from './notify';

/**
 * Notify 消息提示
 * @description 在页面顶部展示消息提示，支持函数调用和组件调用两种方式。
 */
const NotifyMethod: React.FC<NotifyMethodProps> = ({
  duration = 3000,
  message,
  hook,
  ...restProps
}) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(message);

  useEffect(() => {
    setShow(true);

    // 暂时用这个方式
    hook &&
      hook({
        close: () => {
          setShow(false);
        },
        setMessage: (s) => {
          setMsg(s);
        },
      });

    let timer: ReturnType<typeof setTimeout>;

    if (duration !== 0) {
      timer = setTimeout(() => {
        // 隐藏弹窗
        setShow(false);
      }, +duration);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [duration, hook]);

  return <Notify {...restProps} show={show} message={msg} />;
};

export default memo(NotifyMethod);
