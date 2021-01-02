import React, { useRef, useEffect, memo } from 'react';
import {
  Text,
  TouchableHighlight,
  Animated,
  Easing,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { ButtonProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';
import helpers from '../helpers';

/**
 * Button 按钮
 * @description 按钮用于触发一个操作，如提交表单。
 */
const Button: React.FC<ButtonProps> = ({
  children,
  style,
  text,
  textStyle,
  type = 'default',
  size = 'normal',
  plain = false,
  hairline = false,
  disabled = false,
  loading = false,
  loadingText,
  square = false,
  round = false,
  icon,
  iconStyle,
  color,
  onPress,
  ...otherProps
}) => {
  const LoadingRef = useRef(new Animated.Value(0));
  const { themeVar } = Theme.useContainer();

  const Styles = createStyles(themeVar, {
    size,
    color,
    type,
    plain,
    hairline,
    square,
    round,
    disabled,
  });

  /**
   * 点击按钮回调
   * @param e event 回调事件
   */
  const onPressTouchable = (e: GestureResponderEvent) => {
    if (!disabled && !loading) {
      onPress && onPress(e);
    }
  };

  // loading 状态
  useEffect(() => {
    const playerAnimated = Animated.timing(LoadingRef.current, {
      toValue: 1,
      duration: 1500,
      easing: Easing.out(Easing.linear),
      useNativeDriver: true,
    });

    let stop = false;

    if (loading) {
      const start = () => {
        if (stop) {
          return;
        }

        LoadingRef.current.setValue(0);

        playerAnimated.start(() => {
          start();
        });
      };

      start();
    }

    return () => {
      stop = true;
      playerAnimated.stop();
    };
  }, [loading]);

  const wrapperStyles = [Styles.wrapper, style];
  const textStyles = [Styles.text, textStyle];
  const iconStyles = [Styles.icon, iconStyle];

  return (
    <TouchableHighlight
      underlayColor={helpers.hex2rgba(
        (Styles.wrapper.backgroundColor === themeVar.white
          ? themeVar.button_plain_underlay_color
          : Styles.wrapper.backgroundColor) as string,
      )}
      onPress={onPressTouchable}
      style={wrapperStyles}
      {...otherProps}
    >
      {loading ? (
        <>
          <Animated.Text
            style={[
              iconStyles,
              {
                transform: [
                  {
                    rotateZ: LoadingRef.current.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              } as any,
            ]}
          >
            <Icon name="loading1" />
          </Animated.Text>
          {loadingText ? <Text style={textStyles}>{loadingText}</Text> : null}
        </>
      ) : (
        <>
          {icon ? <Text style={iconStyles}>{icon}</Text> : null}
          <Text style={textStyles}>{text || children}</Text>
        </>
      )}
    </TouchableHighlight>
  );
};

export default memo<typeof Button>(Button);
