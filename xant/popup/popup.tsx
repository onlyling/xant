import React, { useEffect, useRef, useCallback, useState, memo } from 'react';
import { Animated, BackHandler } from 'react-native';

import { PopupProps, State } from './interface';
import { createStyles, PopupPositionMap } from './style';
import { getPosition, getTransform } from './helper';
import Overlay from '../overlay/overlay';
import { Theme } from '../theme';
import helpers from '../helpers';

/**
 * Popup 弹出层
 * @description 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。
 */
const Popup: React.FC<PopupProps> = ({
  children,
  show = false,
  overlay = true,
  duration = 0.3,
  closeOnPressOverlay = true,
  position = 'center',
  round = false,
  lazyRender = true,
  onPressOverlay: onPressOverlayFN,
  onOpen: onOpenFN,
  onOpened: onOpenedFN,
  onClose: onCloseFN,
  onCloseed: onCloseedFN,
  onRequestClose,
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { round, position });

  const [state, setState] = useState<State>({
    show,
    zIndex: helpers.getNextZIndex(),
    lazyRender,
  });
  const inited = useRef(false);

  const fadeAnim = useRef(new Animated.Value(getPosition(show, position)))
    .current;
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null);
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
      onPressOverlayFN && onPressOverlayFN();
    }
  }, [closeOnPressOverlay, onPressOverlayFN]);

  // 监听状态变化，执行动画
  useEffect(() => {
    if (show) {
      setState((s) => ({
        ...s,
        show,
        zIndex: helpers.getNextZIndex(),
        lazyRender: false,
      }));
    }

    if (inited.current) {
      fadeAnim.setValue(getPosition(!show, position));

      if (show) {
        onOpenFN && onOpenFN();
      } else {
        onCloseFN && onCloseFN();
      }

      fadeInstance.current = Animated.timing(
        fadeAnim, // 动画中的变量值
        {
          toValue: getPosition(show, position),
          duration: +duration * 1000,
          useNativeDriver: true,
        },
      );

      fadeInstance.current.start(() => {
        fadeInstance.current = null;
        if (!show) {
          setState((s) => ({
            ...s,
            show,
          }));
          onCloseedFN && onCloseedFN();
        } else {
          onOpenedFN && onOpenedFN();
        }
      });
    }

    return () => {
      // 停止动画
      stopShow();
    };
  }, [
    show,
    duration,
    fadeAnim,
    stopShow,
    position,
    onOpenFN,
    onOpenedFN,
    onCloseFN,
    onCloseedFN,
  ]);

  // 初始化好组件
  useEffect(() => {
    inited.current = true;
  }, []);

  // Android 返回按钮
  useEffect(() => {
    const backAction = () => {
      if (typeof onRequestClose === 'function' && show) {
        return onRequestClose();
      }

      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [onRequestClose, show]);

  const popupStyles = [
    Styles.popup,
    state.show ? Styles.popupActive : null,
    {
      zIndex: state.zIndex,
    },
    state.show ? getTransform(position, fadeAnim) : null,
    state.show ? PopupPositionMap[position] : null,
  ];

  if (state.lazyRender) {
    return null;
  }

  return (
    <>
      {overlay ? (
        <Overlay
          show={state.show}
          zIndex={state.zIndex}
          duration={duration}
          onPress={onPressOverlay}
        />
      ) : null}

      <Animated.View
        style={popupStyles}
        pointerEvents={position !== 'center' ? undefined : 'box-none'}
      >
        {children}
      </Animated.View>
    </>
  );
};

export default memo<typeof Popup>(Popup);
