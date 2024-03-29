import React, { useEffect, useRef, useState, memo } from 'react';
import type { ViewStyle } from 'react-native';
import { TouchableOpacity, Animated, BackHandler, StyleSheet } from 'react-native';

import type { OverlayProps } from './interface';
import { useTheme } from '../theme';

/**
 * Overlay 遮罩层
 * @description 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。
 * TODO 统计遮罩层数量，动态控制状态栏的颜色，避免黑色遮罩层配合黑色文字的状态栏。
 */
const Overlay: React.FC<OverlayProps> = ({ children, style, zIndex, show = false, duration = 300, onPress, onRequestClose }) => {
  const { themeVar } = useTheme();
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
        duration: duration,
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

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [show, onRequestClose]);

  const overlayStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.overlay,
    localShow ? Styles.overlayActive : null,
    {
      opacity: fadeAnim.current as unknown as number,
      backgroundColor: themeVar.overlay_background_color,
      zIndex: zIndex ? +zIndex : themeVar.overlay_z_index,
    },
  ]);
  const touchableStyleSummary: ViewStyle = StyleSheet.flatten([Styles.touchable, style]);

  if (!localShow) {
    // TODO 优化文档报错
    // 直接返回 null dumi 报错 -、-
    return <></>;
  }

  return (
    <Animated.View style={overlayStyleSummary}>
      <TouchableOpacity style={touchableStyleSummary} activeOpacity={1} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};

const Styles = StyleSheet.create({
  overlay: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  overlayActive: {
    position: 'absolute',
  },

  touchable: {
    flex: 1,
  },
});

export default memo<typeof Overlay>(Overlay);
