import React, { memo } from 'react';

import { ActionSheet } from './interface';
import ActionSheetView from './action-sheet';
// import ActionSheetMethodView from './action-sheet-method';
import Portal from '../portal';

const ActionSheetInstance: ActionSheet = (opts) => {
  console.log(opts);
  return Promise.resolve();
  // return new Promise((resovle, reject) => {
  //   const key = Portal.add(
  //     <ActionSheetMethodView
  //       {...opts}
  //       onCloseed={() => {
  //         Portal.remove(key);

  //         if (__DEV__) {
  //           console.log('dialog removed');
  //         }

  //         opts.onCloseed && opts.onCloseed();
  //       }}
  //       callback={(action) => {
  //         if (action === 'confirm') {
  //           resovle(action);
  //         } else {
  //           reject(action);
  //         }
  //       }}
  //     />,
  //   );
  // });
};

ActionSheetInstance.Component = memo((props) => {
  return (
    <Portal>
      <ActionSheetView {...props} />
    </Portal>
  );
});

export default ActionSheetInstance;
