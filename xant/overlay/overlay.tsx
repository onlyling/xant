import React, { useEffect, useRef, useCallback, useState, memo } from 'react';
import { TouchableOpacity, Animated } from 'react-native';

import { OverlayProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';

/**
 * Overlay 遮罩层
 * @description 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。
 * TODO 统计遮罩层数量，动态控制状态栏的颜色，避免黑色遮罩层配合黑色文字的状态栏。
 */
const Overlay: React.FC<OverlayProps> = ({
  children,
  style,
  zIndex,
  show = false,
  duration = 0.3,
  onPress,
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { zIndex });

  const [localShow, setShow] = useState(show);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null);
  const stopShow = useCallback(() => {
    if (fadeInstance.current) {
      fadeInstance.current.stop();
      fadeInstance.current = null;
    }
  }, [fadeInstance]);

  useEffect(() => {
    if (show) {
      setShow(true);
    }
    fadeInstance.current = Animated.timing(
      fadeAnim, // 动画中的变量值
      {
        toValue: show ? 1 : 0,
        duration: +duration * 1000,
        useNativeDriver: true,
      },
    );

    fadeInstance.current.start(() => {
      fadeInstance.current = null;
      if (!show) {
        setShow(false);
      }
    });

    return () => {
      // 停止动画
      stopShow();
    };
  }, [show, duration, fadeAnim, stopShow]);

  const overlayStyles = [
    Styles.overlay,
    localShow ? Styles.overlayActive : null,
    { opacity: fadeAnim },
  ];
  const touchableStyles = [Styles.touchable, style];

  return (
    <Animated.View style={overlayStyles}>
      <TouchableOpacity
        style={touchableStyles}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo<typeof Overlay>(Overlay);
