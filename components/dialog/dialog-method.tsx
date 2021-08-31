import React, { useEffect, memo } from 'react';

import type { DialogMethodProps, DialogAction, DialogMethodState } from './interface';
import Dialog from './dialog';
import useState from '../hooks/use-state-update';
import { isPromise } from '../helpers/typeof';

/**
 * Dialog 弹出框
 * @description 配合函数的使用
 */
const DialogMethod: React.FC<DialogMethodProps> = ({ beforeClose, callback, ...restProps }) => {
  const [state, setState] = useState<DialogMethodState>({
    show: false,
    cancel: false,
    confirm: false,
    overlay: false,
  });

  const genOnPressBtn = (action: DialogAction) => () => {
    const doOkCallback = (v: boolean, okCallback: () => void) => {
      setState({
        [action]: false,
      });
      if (v) {
        okCallback();
      }
    };
    const doCallback = (returnVal: boolean | Promise<boolean>, okCallback: () => void) => {
      if (isPromise(returnVal)) {
        setState({
          [action]: true,
        });

        returnVal.then((value) => {
          doOkCallback(value, okCallback);
        });
      } else {
        doOkCallback(returnVal, okCallback);
      }
    };
    const doOnPressCallback = () => {
      callback(action);
      doOkCallback(true, () => {
        setState({
          show: false,
        });
      });
    };

    if (beforeClose) {
      doCallback(beforeClose(action), () => {
        doOnPressCallback();
      });
    } else {
      doOnPressCallback();
    }
  };

  useEffect(() => {
    setState({
      show: true,
    });
  }, []);

  return (
    <Dialog
      {...restProps}
      show={state.show}
      onPressConfirm={genOnPressBtn('confirm')}
      onPressCancel={genOnPressBtn('cancel')}
      onPressOverlay={genOnPressBtn('overlay')}
      cancelButtonLoading={state.cancel}
      confirmButtonLoading={state.confirm}
    />
  );
};

export default memo(DialogMethod);
