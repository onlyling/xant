import React, { memo } from 'react';

import type { ActionSheetInstance } from './interface';
import ActionSheetView from './action-sheet';
import ActionSheetMethodView from './action-sheet-method';
import Portal from '../portal';

const ActionSheet: ActionSheetInstance = (opts) => {
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

ActionSheet.Component = memo((props) => {
  return (
    <Portal>
      <ActionSheetView {...props} />
    </Portal>
  );
});

export default ActionSheet;