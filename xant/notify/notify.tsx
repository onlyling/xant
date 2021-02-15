import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { NotifyProps } from './interface';
import { createStyles } from './style';
import Popup from '../popup/popup';
import { Theme } from '../theme';

/**
 * Notify 消息提示
 * @description 在页面顶部展示消息提示，支持函数调用和组件调用两种方式。
 */
const Notify: React.FC<NotifyProps> = ({
  style,
  textStyle,
  type = 'primary',
  message,
  color,
  backgroundColor,
  onPress,
  duration = 3000,
  ...restProps
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { type, color, backgroundColor });

  const messageStyles = [Styles.notify, style];
  const messageTextStyles = [Styles.text, textStyle];

  const MessageJSX = message ? (
    React.isValidElement(message) ? (
      message
    ) : (
      <Text style={messageTextStyles}>{message}</Text>
    )
  ) : null;

  return (
    <Popup {...restProps} position="top" duration={duration}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={messageStyles}>{MessageJSX}</View>
      </TouchableWithoutFeedback>
    </Popup>
  );
};

export default Notify;
