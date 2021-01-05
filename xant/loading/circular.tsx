import React, { useRef, useMemo, memo } from 'react';
import { ViewStyle, Animated } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

import useLoop from './loop';
import { Theme } from '../theme';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export interface CircularProps {
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
  // transform: [
  //   {
  //     rotate: '-90deg',
  //   },
  // ],
};

const strokeWidth = 2;

const Circular: React.FC<CircularProps> = ({ size, color }) => {
  const { themeVar } = Theme.useContainer();
  const AnimatedCircle0Value = useRef(new Animated.Value(0)).current;
  const AnimatedCircle1Value = useRef(new Animated.Value(0)).current;
  const AnimatedCircle2Value = useRef(new Animated.Value(0)).current;

  const rsize = +(size || themeVar.loading_spinner_size);
  const rcolor = color || themeVar.primary;

  const circle1Props = useMemo(() => {
    const center = Math.floor(rsize / 2);
    const radios = Math.floor(center - strokeWidth / 2);

    return {
      cy: center,
      cx: center,
      r: radios,
    };
  }, [rsize]);

  const circle2Props = useMemo(() => {
    const center = Math.floor(rsize / 2);
    const radios = Math.floor(center - strokeWidth / 2 - 8);

    return {
      cy: center,
      cx: center,
      r: radios,
    };
  }, [rsize]);

  const half1Circle = useMemo(() => circle1Props.r * Math.PI, [circle1Props.r]);
  const half2Circle = useMemo(() => circle2Props.r * Math.PI, [circle2Props.r]);

  useLoop(AnimatedCircle0Value, 0, {
    toValue: 1,
    duration: themeVar.loading_spinner_animation_duration * 1000,
  });

  useLoop(AnimatedCircle1Value, half1Circle, {
    toValue: -half1Circle * 2,
    duration: themeVar.loading_spinner_animation_duration * 1000 * 2,
  });

  useLoop(AnimatedCircle2Value, half2Circle, {
    toValue: -half2Circle * 2,
    duration: themeVar.loading_spinner_animation_duration * 1000 * 2.8,
  });

  const wrapperStyles: ViewStyle[] = [
    wrapperStyle,
    {
      width: rsize,
      height: rsize,
      transform: [
        {
          rotateZ: AnimatedCircle0Value.interpolate({
            inputRange: [0, 1],
            outputRange: ['-90deg', '270deg'],
          }) as any,
        },
      ],
    },
  ];

  return (
    <Animated.View style={wrapperStyles}>
      <Svg
        width="100%"
        height="100%"
        // style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
      >
        <AnimatedCircle
          {...circle1Props}
          stroke={rcolor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${half1Circle},${half1Circle * 2}`}
          strokeLinecap="round"
          // strokeDashoffset={half1Circle - half1Circle - half1Circle - 10}
          strokeDashoffset={AnimatedCircle1Value}
          fill="none"
        />

        <AnimatedCircle
          {...circle2Props}
          stroke={rcolor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${half2Circle},${half2Circle * 2}`}
          strokeLinecap="round"
          // strokeDashoffset={half1Circle - half1Circle - half1Circle - 10}
          strokeDashoffset={AnimatedCircle2Value}
          fill="none"
        />
      </Svg>
    </Animated.View>
  );
};

export default memo(Circular);
