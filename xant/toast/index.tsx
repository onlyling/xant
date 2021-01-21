import React from 'react';

import { ToastProps, ToastType, Toast, ToastMethods } from './interface';
import ToastView from './toast';
import Portal from '../portal';

type OptionsMap = Record<ToastType, ToastProps | undefined | null>;

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
        ref.current = null;
        opts.onCloseed && opts.onCloseed();
      }}
    />,
  );

  return {
    clear: () => {
      ref.current?.close();
    },
  };
};

ToastInstance.clear = (mark) => {
  if (typeof mark === 'boolean') {
    // 清除所有
  } else {
    // 清除某一个
  }
};

ToastInstance.setDefaultOptions = (type, options) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    Object.assign(currentOptions, type);
  }
};

ToastInstance.resetDefaultOptions = (type) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = { ...defaultOptions };
    defaultOptionsMap = {} as OptionsMap;
  }
};

export default ToastInstance;
