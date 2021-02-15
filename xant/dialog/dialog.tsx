import React, { useEffect, useRef, memo } from 'react';
import { View, Text, Animated } from 'react-native';

import { DialogProps } from './interface';
import { createStyles } from './style';
import Popup from '../popup/popup';
import Button from '../button';
import { ActionBar, ActionBarButton } from '../action-bar';
import { Theme } from '../theme';

const getScale = (s: boolean) => (s ? 1 : 0.2);

/**
 * Dialog 弹出框
 * @description 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。
 * @description 弹出框组件支持函数调用和组件调用两种方式。
 * @description 在安卓真机表现，按钮的透明度有点问题。
 */
const Dialog: React.FC<DialogProps> = ({
  children,
  show,
  title,
  message,
  width,
  messageAlign = 'center',
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
  ...restProps
}) => {
  const fadeAnim = useRef(new Animated.Value(getScale(show))).current;

  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { messageAlign, width });

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
      message
    ) : (
      <Text style={messageTextStyles}>{message}</Text>
    )
  ) : (
    children
  );

  const cancelButtonProps = {
    color: cancelButtonColor || themeVar.dialog_cancel_button_text_color,
    text: cancelButtonText,
    loading: cancelButtonLoading,
    onPress: onPressCancel,
  };

  const confirmButtonProps = {
    color: confirmButtonColor || themeVar.dialog_confirm_button_text_color,
    text: confirmButtonText,
    loading: confirmButtonLoading,
    onPress: onPressConfirm,
  };

  return (
    <Popup
      {...restProps}
      show={show}
      duration={themeVar.dialog_transition / 1000}
    >
      <Animated.View style={dialogStyles}>
        {TitleJSX}

        <View style={Styles.contentIsolated}>{MessageJSX}</View>

        {theme === 'default' ? (
          <View style={Styles.footer}>
            {showCancelButton ? (
              <Button
                {...cancelButtonProps}
                plain
                size="large"
                style={Styles.btn}
              />
            ) : null}
            {showConfirmButton ? (
              <Button
                {...confirmButtonProps}
                plain
                size="large"
                style={[Styles.btn, showCancelButton ? Styles.btnLeft : null]}
              />
            ) : null}
          </View>
        ) : null}

        {theme === 'round-button' ? (
          <ActionBar style={Styles.footerRound}>
            {showCancelButton ? (
              <ActionBarButton
                {...cancelButtonProps}
                isFirst
                isLast={!showConfirmButton}
                style={Styles.btnRound}
              />
            ) : null}
            {showConfirmButton ? (
              <ActionBarButton
                {...confirmButtonProps}
                isFirst={!showCancelButton}
                isLast
                style={Styles.btnRound}
              />
            ) : null}
          </ActionBar>
        ) : null}
      </Animated.View>
    </Popup>
  );
};

export default memo<typeof Dialog>(Dialog);
