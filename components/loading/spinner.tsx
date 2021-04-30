import React, { useRef, memo } from 'react';
import type { ViewStyle } from 'react-native';
import { View, Animated, StyleSheet, Easing } from 'react-native';

import useLoop from './loop';
import { useTheme } from '../theme';

export interface SpinnerProps {
  /**
   * 图像大小
   */
  size?: number | string;

  /**
   * 颜色
   */
  color?: string;
}

const wrapperStyle: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  // backgroundColor: '#999', // to test ui
  // transform: [
  //   {
  //     rotate: '-90deg',
  //   },
  // ],
};

const petalStyle: ViewStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  alignItems: 'center',
  // backgroundColor: '#f30', // to test ui
};
const petalInnerStyle: ViewStyle = {
  width: 2,
  height: '25%',
  borderRadius: 1,
  backgroundColor: '#000',
};

const petalCount = 12;
const petals = new Array(petalCount).fill(0);

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  const { themeVar } = useTheme();
  const AnimatedSpinnerValue = useRef(new Animated.Value(0)).current;

  const rsize = +(size || themeVar.loading_spinner_size);
  const rcolor = color || themeVar.primary;

  useLoop(AnimatedSpinnerValue, 0, {
    toValue: 1,
    duration: themeVar.loading_spinner_animation_duration * 1000,
    easing: Easing.linear,
  });

  const wrapperStyles: ViewStyle[] = [
    wrapperStyle,
    {
      width: rsize,
      height: rsize,
      transform: [
        {
          rotateZ: AnimatedSpinnerValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }) as any,
        },
      ],
    },
  ];

  return (
    <Animated.View style={wrapperStyles}>
      {petals.map((_, i) => {
        return (
          <View
            key={i}
            style={StyleSheet.compose(petalStyle, {
              opacity: (1 / petalCount) * (i + 1),
              transform: [
                {
                  rotate: `${(360 / petalCount) * i}deg`,
                },
              ],
            })}
          >
            <View
              style={StyleSheet.compose(petalInnerStyle, {
                backgroundColor: rcolor,
              })}
            />
          </View>
        );
      })}
    </Animated.View>
  );
};

export default memo(Spinner);
