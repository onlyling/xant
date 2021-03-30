import React, { useEffect, memo } from 'react';

import type {
  DialogMethodProps,
  DialogAction,
  DialogMethodState,
} from './interface';
import Dialog from './dialog';
import useState from '../hooks/use-state-update';
import useDestroyed from '../hooks/use-destroyed';
import * as helpers from '../helpers';

/**
 * Dialog 弹出框
 * @description 配合函数的使用
 */
const DialogMethod: React.FC<DialogMethodProps> = ({
  beforeClose,
  callback,
  ...restProps
}) => {
  const [state, setState] = useState<DialogMethodState>({
    show: false,
    cancel: false,
    confirm: false,
    overlay: false,
  });
  const getDestroyed = useDestroyed();

  const genOnPressBtn = (action: DialogAction) => () => {
    const canceled = () => {
      if (!getDestroyed()) {
        setState({
          [action]: false,
        });
      }
    };
    const done = () => {
      callback && callback(action);
      canceled();
      if (!getDestroyed()) {
        setState({
          show: false,
        });
      }
    };

    if (beforeClose) {
      const returnVal = beforeClose(action);
      // 如果有判断条件
      if (helpers.isPromise(returnVal)) {
        setState({
          [action]: true,
        });

        returnVal
          .then((value) => {
            if (value) {
              // 关闭对话框
              done();
            } else {
              canceled();
            }
          })
          .catch(helpers.noop);
      } else {
        if (returnVal) {
          // 关闭对话框
          done();
        } else {
          canceled();
        }
      }
    } else {
      // 关闭对话框
      done();
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
