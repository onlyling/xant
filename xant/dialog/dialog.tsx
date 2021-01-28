import React, { useEffect, useRef, memo } from 'react';
import { View, Text, Animated } from 'react-native';

import { DialogProps } from './interface';
import { createStyles } from './style';
import Popup from '../popup/popup';
import Button from '../button';
import { Theme } from '../theme';

const getScale = (s: boolean) => (s ? 1 : 0.2);

/**
 * Dialog 弹出框
 * @description 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。
 * @description 弹出框组件支持函数调用和组件调用两种方式。
 */
const Dialog: React.FC<DialogProps> = ({
  children,
  show,
  title,
  message,
  theme = 'default',
  showConfirmButton = true,
  showCancelButton = false,
  confirmButtonText = '确认',
  cancelButtonText = '取消',
  confirmButtonColor,
  cancelButtonColor,
  confirmButtonLoading = false,
  cancelButtonLoading = false,
  onPressCancel,
  onPressConfirm,
}) => {
  const fadeAnim = useRef(new Animated.Value(getScale(show))).current;

  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar);

  useEffect(() => {
    const instance = Animated.timing(
      fadeAnim, // 动画中的变量值
      {
        toValue: getScale(show),
        duration: themeVar.dialog_transition,
        useNativeDriver: true,
      },
    );

    instance.start();

    return () => {
      instance.stop();
    };
  }, [fadeAnim, show, themeVar.dialog_transition]);

  const dialogStyles = [
    Styles.dialog,
    {
      transform: [
        {
          scale: fadeAnim,
        },
      ],
    },
  ];
  const titleTextStyles = [Styles.titleText];
  const messageTextStyles = [Styles.messageText];

  /** 标题部分 纯文字或自定义 JSX */
  const TitleJSX = title ? (
    React.isValidElement(title) ? (
      title
    ) : (
      <Text style={titleTextStyles}>{title}</Text>
    )
  ) : null;

  const MessageJSX = message ? (
    React.isValidElement(message) ? (
      title
    ) : (
      <Text style={messageTextStyles}>{message}</Text>
    )
  ) : (
    children
  );

  return (
    <Popup show={show} duration={themeVar.dialog_transition / 1000}>
      <Animated.View style={dialogStyles}>
        {TitleJSX}

        <View style={Styles.contentIsolated}>{MessageJSX}</View>

        {theme === 'default' ? (
          <View style={Styles.footer}>
            {showCancelButton ? (
              <Button
                plain
                size="large"
                style={Styles.btn}
                color={
                  cancelButtonColor || themeVar.dialog_cancel_button_text_color
                }
                text={cancelButtonText}
                loading={cancelButtonLoading}
                onPress={onPressCancel}
              />
            ) : null}
            {showConfirmButton ? (
              <Button
                plain
                size="large"
                style={[Styles.btn, showCancelButton ? Styles.btnLeft : null]}
                color={
                  confirmButtonColor ||
                  themeVar.dialog_confirm_button_text_color
                }
                text={confirmButtonText}
                loading={confirmButtonLoading}
                onPress={onPressConfirm}
              />
            ) : null}
          </View>
        ) : null}
      </Animated.View>
    </Popup>
  );
};

export default memo<typeof Dialog>(Dialog);
