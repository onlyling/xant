import React from 'react';

import { ToastProps, ToastType, Toast, ToastMethods } from './interface';
import ToastView from './toast';
import Portal from '../portal';

type OptionsMap = Record<ToastType, ToastProps | undefined | null>;

const parseOptions = (message: ToastProps | string) => {
  if (typeof message === 'object') {
    return message;
  }
  return { message };
};

const defaultOptions: ToastProps = {
  type: 'text',
  duration: 2000,
  message: '',
  position: 'middle',
  forbidClick: false,
  closeOnClickOverlay: false,
  overlay: false,
  loadingType: 'circular',
};

let defaultOptionsMap = {} as OptionsMap;

let currentOptions = {
  ...defaultOptions,
};

/**
 * 提示
 */
const ToastInstance: Toast = (options) => {
  let opts: ToastProps =
    typeof options === 'string' ? { message: options } : options;

  const type = opts.type || currentOptions.type;

  // 合并参数
  opts = {
    ...currentOptions,
    ...(type ? defaultOptionsMap[type] : {}),
    ...opts,
  };

  let ref: { current: ToastMethods | null } = {
    current: null,
  };
  const hookInner = (methods: ToastMethods) => {
    ref.current = methods;
    opts.hook && opts.hook(methods);
  };
  const key = Portal.add(
    <ToastView
      {...opts}
      hook={hookInner}
      onCloseed={() => {
        Portal.remove(key);
        if (__DEV__) {
          console.log('toast removed');
        }
        ref.current = null;
        opts.onCloseed && opts.onCloseed();
      }}
    />,
  );

  return {
    close: () => {
      ref.current?.close();
    },
    setMessage: (m: string) => {
      ref.current?.setMessage(m);
    },
  };
};

/**
 * loading
 */
ToastInstance.loading = (options) =>
  ToastInstance({
    type: 'loading',
    ...parseOptions(options),
  });

// TODO success fail 现在不确定两个图标用 svg 画还是字体文件
// react-native-vector-icons 太庞大了

/**
 * 清除弹窗
 */
ToastInstance.clear = (mark) => {
  if (typeof mark === 'boolean') {
    // 清除所有
  } else {
    // 清除某一个
  }
};

/**
 * 修改默认配置，对所有 Toast 生效。传入 type 可以修改指定类型的默认配置
 */
ToastInstance.setDefaultOptions = (type, options) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    Object.assign(currentOptions, type);
  }
};

/**
 * 重置默认配置，对所有 Toast 生效。传入 type 可以重置指定类型的默认配置
 */
ToastInstance.resetDefaultOptions = (type) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = { ...defaultOptions };
    defaultOptionsMap = {} as OptionsMap;
  }
};

export default ToastInstance;
