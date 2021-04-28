import React, { memo } from 'react';

import type { NotifyInstance, NotifyMethods, NotifyOptions } from './interface';
import NotifyView from './notify';
import NotifyMethod from './notify-method';
import Portal from '../portal';

const Notify: NotifyInstance = (options) => {
  let opts: NotifyOptions =
    typeof options === 'string' ? { message: options } : options;

  let ref: NotifyMethods | null = null;

  const hookInner = (methods: NotifyMethods) => {
    ref = methods;
    opts.hook && opts.hook(methods);
  };

  const key = Portal.add(
    <NotifyMethod
      {...opts}
      hook={hookInner}
      onClosed={() => {
        Portal.remove(key);
        if (__DEV__) {
          console.log('notify removed');
        }
        ref = null;
        opts.onClosed && opts.onClosed();
      }}
    />,
  );

  return {
    close: () => {
      ref?.close();
    },
    setMessage: (m: React.ReactNode) => {
      ref?.setMessage(m);
    },
  };
};

Notify.Component = memo((props) => {
  return (
    <Portal>
      <NotifyView {...props} />
    </Portal>
  );
});

export default Notify;
