import React, { memo } from 'react';

import { ActionBarButtonProps } from './interface';
import { createStyles } from './style.button';
import Button from '../button';
import { Theme } from '../theme';

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
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar);

  const buttonStyles = [
    Styles.button,
    isFirst ? Styles.first : null,
    isLast ? Styles.last : null,
    style,
  ];
  const textStyles = [Styles.textStyle, textStyle];

  return (
    <Button
      {...rest}
      size="large"
      style={buttonStyles}
      textStyle={textStyles}
    />
  );
};

export default memo<typeof ActionBarButton>(ActionBarButton);
