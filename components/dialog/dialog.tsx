import React, { useEffect, useRef, useCallback, memo } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import { View, Text, Animated, BackHandler, StyleSheet } from 'react-native';

import type { DialogProps, State } from './interface';
import { createStyles } from './style';
import Overlay from '../overlay/overlay';
import Button from '../button';
import { ActionBar, ActionBarButton } from '../action-bar';
import { useTheme } from '../theme';
import useState from '../hooks/use-state-update';
import usePersistFn from '../hooks/use-persist-fn';
import { isDef } from '../helpers/typeof';
import * as helpers from '../helpers';

const getScale = (s: boolean) => (s ? 1 : 0);

/**
 * Dialog 弹出框
 * @description 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。
 * @description 弹出框组件支持函数调用和组件调用两种方式。
 * @description 在安卓真机表现，按钮的透明度有点问题。问题是按钮有背景色，和整个透明冲突，如果想要带上透明的改动有点大，暂时只缩放大小
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
  overlay = true,
  duration,
  closeOnPressOverlay = true,
  onPressOverlay: onPressOverlayFn,
  onOpen: onOpenFn,
  onOpened: onOpenedFn,
  onClose: onCloseFn,
  onClosed: onClosedFn,
  onRequestClose,
}) => {
  const { themeVar } = useTheme();
  const onPressOverlayPersistFn = usePersistFn(onPressOverlayFn || helpers.noop);
  const onOpenPersistFn = usePersistFn(onOpenFn || helpers.noop);
  const onOpenedPersistFn = usePersistFn(onOpenedFn || helpers.noop);
  const onClosePersistFn = usePersistFn(onCloseFn || helpers.noop);
  const onClosedPersistFn = usePersistFn(onClosedFn || helpers.noop);
  const Styles = createStyles(themeVar, { messageAlign, width });

  if (!isDef(duration)) {
    duration = themeVar.animation_duration_base;
  }

  const [state, setState] = useState<State>({
    show,
    // 遮罩层显示、隐藏单独管理，避免弹出层完成后才触发关闭，两个组件应该同时变化
    overlayShow: show,
    zIndex: helpers.getNextZIndex(),
  });

  const fadeAnim = useRef(new Animated.Value(getScale(show))).current;
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null);
  const MountedRef = useRef(false);
  const stopShow = useCallback(() => {
    if (fadeInstance.current) {
      fadeInstance.current.stop();
      fadeInstance.current = null;
    }
  }, [fadeInstance]);
  /** 点击遮罩层 */
  const onPressOverlay = useCallback(() => {
    if (closeOnPressOverlay) {
      // 关闭弹层
      onPressOverlayPersistFn();
    }
  }, [closeOnPressOverlay, onPressOverlayPersistFn]);

  // 监听状态变化，执行动画
  useEffect(() => {
    if (show) {
      // 弹出弹出，立即响应
      setState({
        show,
        zIndex: helpers.getNextZIndex(),
      });
    }

    // 遮罩层状态实时显示
    setState({
      overlayShow: show,
    });

    if (MountedRef.current) {
      fadeAnim.setValue(getScale(!show));

      if (show) {
        onOpenPersistFn();
      } else {
        onClosePersistFn();
      }

      fadeInstance.current = Animated.timing(
        fadeAnim, // 动画中的变量值
        {
          toValue: getScale(show),
          duration: duration,
          useNativeDriver: true,
          easing: show ? helpers.easing.easeOutCirc : helpers.easing.easeInCubic,
        },
      );

      fadeInstance.current.start(() => {
        fadeInstance.current = null;
        if (!show) {
          setState({ show });
          onClosedPersistFn();
        } else {
          onOpenedPersistFn();
        }
      });
    }

    return () => {
      // 停止动画
      stopShow();
    };
  }, [show, duration, fadeAnim, stopShow, onOpenPersistFn, onOpenedPersistFn, onClosePersistFn, onClosedPersistFn]);

  // Android 返回按钮
  useEffect(() => {
    const backAction = () => {
      if (typeof onRequestClose === 'function' && show) {
        return onRequestClose();
      }

      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [onRequestClose, show]);

  // 初始化好组件
  useEffect(() => {
    MountedRef.current = true;
  }, []);

  const boxStyleSummary = StyleSheet.flatten<ViewStyle>([
    Styles.box,
    {
      zIndex: state.zIndex,
    },
  ]);
  const dialogStyleSummary = StyleSheet.flatten([
    Styles.dialog,
    {
      transform: [
        {
          scale: fadeAnim.interpolate({
            inputRange: [0, 0.01, 0.98, 1],
            outputRange: [0, 0.9, 1.01, 1],
          }),
        },
      ],
    },
  ]);
  const messageTextStyleSummary = StyleSheet.flatten<TextStyle>([Styles.messageText, title ? Styles.messageTextHasTitle : null]);

  /** 标题部分 纯文字或自定义 JSX */
  const titleJSX = isDef(title) ? React.isValidElement(title) ? title : <Text style={Styles.titleText}>{title}</Text> : null;

  const messageJSX = isDef(message) ? React.isValidElement(message) ? message : <Text style={messageTextStyleSummary}>{message}</Text> : children;

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
    <>
      {overlay ? <Overlay show={state.overlayShow} zIndex={state.zIndex} duration={duration} onPress={onPressOverlay} /> : null}

      {state.show ? (
        <View style={boxStyleSummary} pointerEvents="box-none">
          <Animated.View style={dialogStyleSummary}>
            {titleJSX}

            {titleJSX ? messageJSX : <View style={Styles.contentIsolated}>{messageJSX}</View>}

            {theme === 'default' ? (
              <View style={Styles.footer}>
                {showCancelButton ? <Button {...cancelButtonProps} plain size="large" style={Styles.btn} /> : null}
                {showConfirmButton ? <Button {...confirmButtonProps} plain size="large" style={[Styles.btn, showCancelButton ? Styles.btnLeft : null]} /> : null}
              </View>
            ) : null}

            {theme === 'round-button' ? (
              <ActionBar style={Styles.footerRound}>
                {showCancelButton ? <ActionBarButton {...cancelButtonProps} isFirst isLast={!showConfirmButton} style={Styles.btnRound} /> : null}
                {showConfirmButton ? <ActionBarButton {...confirmButtonProps} isFirst={!showCancelButton} isLast style={Styles.btnRound} /> : null}
              </ActionBar>
            ) : null}
          </Animated.View>
        </View>
      ) : null}
    </>
  );
};

export default memo<typeof Dialog>(Dialog);
