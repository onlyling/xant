import React, { memo } from 'react';

import type { Dialog } from './interface';
import DialogView from './dialog';
import DialogMethodView from './dialog-method';
import Portal from '../portal';

/**
 * 对话框
 */
const DialogInstance: Dialog = (opts) => {
  return new Promise((resovle, reject) => {
    const key = Portal.add(
      <DialogMethodView
        {...opts}
        onClosed={() => {
          Portal.remove(key);

          if (__DEV__) {
            console.log('dialog removed');
          }

          opts.onClosed && opts.onClosed();
        }}
        callback={(action) => {
          if (action === 'confirm') {
            resovle(action);
          } else {
            reject(action);
          }
        }}
      />,
    );
  });
};

DialogInstance.Component = memo((props) => {
  return (
    <Portal>
      <DialogView {...props} />
    </Portal>
  );
});

DialogInstance.confirm = (options) => {
  return DialogInstance({
    showCancelButton: true,
    ...options,
  });
};

export default DialogInstance;
