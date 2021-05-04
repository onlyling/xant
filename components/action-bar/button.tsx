import React, { memo } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import { StyleSheet } from 'react-native';

import type { ActionBarButtonProps } from './interface';
import { createStyles } from './style.button';
import Button from '../button';
import { useTheme } from '../theme';

/**
 * ActionBarButton 动作栏里面的按钮
 * @description 需要在业务中指定按钮的左右圆弧
 */
const ActionBarButton: React.FC<ActionBarButtonProps> = ({
  isFirst,
  isLast,
  style,
  textStyle,
  ...rest
}) => {
  const { themeVar } = useTheme();
  const Styles = createStyles(themeVar);

  const buttonStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.button,
    isFirst ? Styles.first : null,
    isLast ? Styles.last : null,
    style,
  ]);
  const textStyleSummary: TextStyle = StyleSheet.flatten([
    Styles.textStyle,
    textStyle,
  ]);

  return (
    <Button
      {...rest}
      size="large"
      style={buttonStyleSummary}
      textStyle={textStyleSummary}
    />
  );
};

export default memo<typeof ActionBarButton>(ActionBarButton);
