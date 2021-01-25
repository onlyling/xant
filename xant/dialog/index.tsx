import React from 'react';

import { Dialog, DialogMethods } from './interface';
import DialogView from './dialog';
import Portal from '../portal';

/**
 * 对话框
 */
const DialogInstance: Dialog = (opts) => {
  let ref: { current: DialogMethods | null } = {
    current: null,
  };

  const hookInner = (methods: DialogMethods) => {
    ref.current = methods;
    opts.hook && opts.hook(methods);
  };

  const key = Portal.add(
    <DialogView
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
    close: () => {
      ref.current?.close();
    },
  };
};

DialogInstance.Component = (props) => {
  return (
    <Portal>
      <DialogView {...props} />
    </Portal>
  );
};

export default DialogInstance;
