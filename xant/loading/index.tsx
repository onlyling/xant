import React, { useRef, useCallback, useEffect, memo } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { LoadingProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';

/**
 * Loading 加载
 * 加载图标，用于表示加载中的过渡状态。
 */
const Loading: React.FC<LoadingProps> = ({
  children,
  size,
  color,
  textSize,
  vertical = false,
  type = 'circular',
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { size, color, textSize, vertical });

  const circleAnim = useRef(new Animated.Value(0)).current;
  const circleInstance = useRef<Animated.CompositeAnimation | null>(null);
  const stopShow = useCallback(() => {
    if (circleInstance.current) {
      circleInstance.current.stop();
      circleInstance.current = null;
    }
  }, [circleInstance]);

  useEffect(() => {
    let stop = false;

    const start = () => {
      if (stop) {
        return;
      }

      circleInstance.current = Animated.timing(circleAnim, {
        toValue: 1,
        duration: themeVar.loading_spinner_animation_duration * 1000,
        easing: Easing.out(Easing.linear),
        useNativeDriver: true,
      });

      circleAnim.setValue(0);

      circleInstance.current.start(() => {
        start();
      });
    };

    start();

    return () => {
      stop = true;
      stopShow();
    };
  }, [circleAnim, stopShow, themeVar.loading_spinner_animation_duration]);

  const iconStyles = [
    Styles.icon,
    {
      transform: [
        {
          rotateZ: circleAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    },
  ];

  const TextJSX = children ? (
    React.isValidElement(children) ? (
      children
    ) : (
      <Text style={Styles.text}>{children}</Text>
    )
  ) : null;

  return (
    <View style={Styles.loading}>
      <Animated.View style={iconStyles}>
        <Icon
          name={type === 'circular' ? 'loading1' : 'sync'}
          style={Styles.iconText}
        />
      </Animated.View>
      {TextJSX}
    </View>
  );
};

export default memo<typeof Loading>(Loading);
