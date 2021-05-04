import React, { memo } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import type { NotifyProps } from './interface';
import { createStyles } from './style';
import Popup from '../popup/popup';
import { Theme } from '../theme';

/**
 * Notify 消息提示
 * @description 在页面顶部展示消息提示，支持函数调用和组件调用两种方式。
 * @description 原计划 Notify 的 Props 继承 TouchableWithoutFeedbackProps，更贴近 React Native 提供的组件，这里需要把 Popup 中通用的属性提取出来，如果以后涉及到改动，有点麻烦，等大部分组件完整后看看怎么优化。
 */
const Notify: React.FC<NotifyProps> = ({
  children,
  style,
  textStyle,
  type = 'primary',
  message,
  color,
  backgroundColor,
  onPress,
  fullScreen = false,
  ...restProps
}) => {
  const { themeVar, fullScreen: fullScreenGlobal } = Theme.useContainer();

  if (fullScreenGlobal) {
    fullScreen = fullScreenGlobal;
  }

  console.log(fullScreen);

  const Styles = createStyles(themeVar, {
    type,
    color,
    backgroundColor,
    fullScreen,
  });

  const messageStyles = [Styles.notify, style];
  const messageTextStyles = [Styles.text, textStyle];

  const MessageJSX = message ? (
    React.isValidElement(message) ? (
      message
    ) : (
      <Text style={messageTextStyles}>{message}</Text>
    )
  ) : (
    children
  );

  return (
    <Popup {...restProps} overlay={false} position="top">
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={messageStyles}>{MessageJSX}</View>
      </TouchableWithoutFeedback>
    </Popup>
  );
};

export default memo<typeof Notify>(Notify);
