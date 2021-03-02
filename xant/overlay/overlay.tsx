import React, { useEffect, useRef, useState, memo } from 'react';
import { TouchableOpacity, Animated, BackHandler } from 'react-native';

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
  duration = 300,
  onPress,
  onRequestClose,
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { zIndex });

  const [localShow, setShow] = useState(show);
  const fadeAnim = useRef(new Animated.Value(0));
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null);

  // 监听状态变化，执行动画
  useEffect(() => {
    if (show) {
      setShow(true);
    }
    fadeInstance.current = Animated.timing(
      fadeAnim.current, // 动画中的变量值
      {
        toValue: show ? 1 : 0,
        duration: +duration,
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
      if (fadeInstance.current) {
        fadeInstance.current.stop();
        fadeInstance.current = null;
      }
    };
  }, [show, duration]);

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
  }, [show, onRequestClose]);

  const overlayStyles = [
    Styles.overlay,
    localShow ? Styles.overlayActive : null,
    { opacity: fadeAnim.current },
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
