import React, { useEffect, useRef, memo } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';

import { SwitchProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';

/**
 * Switch 开关
 * @description 用于在打开和关闭状态之间进行切换。
 */
const Switch: React.FC<SwitchProps> = ({
  size,
  disabled = false,
  value = false,
  activeValue = true,
  inactiveValue = false,
  inactiveColor,
  activeColor,
  onPress,
  onChange,
}) => {
  const translateX = useRef(new Animated.Value(0));

  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { size });

  const translateXValue = Styles.activeNode.left;
  const duration = themeVar.switch_transition_duration;
  const actived = value === activeValue;

  const onPressTouchable = () => {
    onPress && onPress();
    if (!disabled) {
      onChange && onChange(actived ? inactiveValue : activeValue);
    }
  };

  useEffect(() => {
    let actionValue: Animated.CompositeAnimation | null;

    actionValue = Animated.timing(
      translateX.current, // 动画中的变量值
      {
        toValue: actived ? translateXValue : 0,
        duration: +duration,
        useNativeDriver: false,
      },
    );

    actionValue.start(() => {
      actionValue = null;
    });

    return () => {
      // 停止动画
      if (actionValue) {
        actionValue.stop();
        actionValue = null;
      }
    };
  }, [actived, translateXValue, duration]);

  const switchStyles = [
    Styles.switch,
    {
      // 当前过渡不支持 color/backgroundColor
      // 参考：https://stackoverflow.com/a/60586628
      backgroundColor: actived
        ? activeColor || themeVar.switch_on_background_color
        : inactiveColor || themeVar.switch_background_color,
    },
    disabled ? Styles.disabled : null,
  ];
  const nodeStyles = [
    Styles.node,
    {
      transform: [
        {
          translateX: translateX.current,
        },
      ],
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={onPressTouchable}>
      <Animated.View style={switchStyles}>
        <Animated.View style={nodeStyles} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default memo(Switch);
