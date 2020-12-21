import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { TagProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';

/**
 * 标签
 */
const Tag: React.FC<TagProps> = ({
  children,
  style,
  wrapperStyle,
  textStyle,
  color,
  textColor = '#fff',
  mark = false,
  plain = false,
  round = false,
  size,
  type = 'default',
  hairline = false,
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, {
    color,
    textColor,
    plain,
    round,
    size,
    type,
    hairline,
  });

  const tagStyles = [Styles.tag, style];
  const wrapperStyles = [
    Styles.wrapper,
    mark ? Styles.wrapperMark : null,
    wrapperStyle,
  ];
  const textStyles = [Styles.text, textStyle];

  return (
    <View style={tagStyles}>
      <View style={wrapperStyles}>
        <Text style={textStyles}>{children}</Text>
      </View>
    </View>
  );
};

export default memo<typeof Tag>(Tag);
