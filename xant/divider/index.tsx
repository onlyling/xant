import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { DividerProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';

/**
 * 分割线
 */
const Divider: React.FC<DividerProps> = ({
  children,
  textStyle,
  borderStyle,
  wrapperStyle,
  dashed = false,
  hairline = true,
  contentPosition = 'center',
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { dashed, hairline, contentPosition });

  const wrapperStyles = [Styles.wrapper, wrapperStyle];
  const textStyles = [Styles.text, textStyle];
  const leftBorderStyles = [Styles.border, Styles.borderLeft, borderStyle];
  const rightBorderStyles = [Styles.border, Styles.borderRight, borderStyle];

  if (children) {
    return (
      <View style={wrapperStyles}>
        <View style={leftBorderStyles} />
        <Text style={textStyles}>{children}</Text>
        <View style={rightBorderStyles} />
      </View>
    );
  }

  return (
    <View style={wrapperStyles}>
      <View style={[Styles.border, borderStyle]} />
    </View>
  );
};

export default memo<typeof Divider>(Divider);
