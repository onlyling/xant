import React, { useState, useEffect, memo } from 'react';

import { DialogMethodProps, DialogAction } from './interface';
import Dialog from './dialog';
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
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState<Record<DialogAction, boolean>>({
    cancel: false,
    confirm: false,
    overlay: false,
  });

  const genOnPressBtn = (action: DialogAction) => () => {
    const canceled = () => {
      setLoading((s) => ({
        ...s,
        [action]: false,
      }));
    };
    const done = () => {
      callback && callback(action);
      canceled();
      setShow(false);
    };

    if (beforeClose) {
      setLoading((s) => ({
        ...s,
        [action]: true,
      }));

      const returnVal = beforeClose(action);
      // 如果有判断条件
      if (helpers.isPromise(returnVal)) {
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
    setShow(true);
  }, []);

  return (
    <Dialog
      {...restProps}
      show={show}
      onPressConfirm={genOnPressBtn('confirm')}
      onPressCancel={genOnPressBtn('cancel')}
      onPressOverlay={genOnPressBtn('overlay')}
      cancelButtonLoading={loading.cancel}
      confirmButtonLoading={loading.confirm}
    />
  );
};

export default memo(DialogMethod);
