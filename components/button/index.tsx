import React, { memo } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Text, TouchableHighlight } from 'react-native';

import type { ButtonProps as ButtonPropsInterface } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';
import Loading from '../loading';
import * as helpers from '../helpers';

export type ButtonProps = ButtonPropsInterface;

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
        <Loading color={Styles.text.color} size={Styles.text.fontSize}>
          {loadingText ? loadingText : null}
        </Loading>
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
