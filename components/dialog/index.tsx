import React, { memo } from 'react';

import type { DialogInstance } from './interface';
import DialogView from './dialog';
import DialogMethodView from './dialog-method';
import Portal from '../portal';

/**
 * 对话框
 */
const Dialog: DialogInstance = (opts) => {
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

Dialog.Component = memo((props) => {
  return (
    <Portal>
      <DialogView {...props} />
    </Portal>
  );
});

Dialog.confirm = (options) => {
  return Dialog({
    showCancelButton: true,
    ...options,
  });
};

export default Dialog;
