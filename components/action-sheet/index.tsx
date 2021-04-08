import React, { memo } from 'react';

import type { ActionSheet } from './interface';
import ActionSheetView from './action-sheet';
import ActionSheetMethodView from './action-sheet-method';
import Portal from '../portal';

const ActionSheetInstance: ActionSheet = (opts) => {
  return new Promise((resovle, reject) => {
    const key = Portal.add(
      <ActionSheetMethodView
        {...opts}
        onClosed={() => {
          Portal.remove(key);

          if (__DEV__) {
            console.log('action-sheet removed');
          }

          opts.onClosed && opts.onClosed();
        }}
        callback={(action, item, index) => {
          if (action === 'item' && item && (index || index === 0)) {
            resovle({
              item,
              index,
            });
          } else {
            reject(action);
          }
        }}
      />,
    );
  });
};

ActionSheetInstance.Component = memo((props) => {
  return (
    <Portal>
      <ActionSheetView {...props} />
    </Portal>
  );
});

export default ActionSheetInstance;
