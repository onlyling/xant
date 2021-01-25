import React, { memo } from 'react';
import { View } from 'react-native';

import { DialogProps } from './interface';
import Popup from '../popup/popup';

/**
 * Dialog 弹出框
 * @description 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。
 * @description 弹出框组件支持函数调用和组件调用两种方式。
 */
const Dialog: React.FC<DialogProps> = ({ children, show }) => {
  return (
    <Popup show={show}>
      <View>{children}</View>
    </Popup>
  );
};

export default memo<typeof Dialog>(Dialog);
