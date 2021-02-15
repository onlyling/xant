import React, { memo } from 'react';

import { Notify } from './interface';
import NotifyView from './notify';
import Portal from '../portal';

const NotifyInstance: Notify = () => {
  return {
    close() {},
    setMessage() {},
  };
};

NotifyInstance.Component = memo((props) => {
  return (
    <Portal>
      <NotifyView {...props} />
    </Portal>
  );
});

export default NotifyInstance;
