import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import type { TagProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';

/**
 * Tag 标签
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
  closeable = false,
  onPressClose,
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
  const textStyles = StyleSheet.compose(Styles.text, (textStyle || {}) as any);

  return (
    <View style={tagStyles}>
      <View style={wrapperStyles}>
        <Text style={textStyles}>{children}</Text>
        {closeable ? (
          <Icon name="close" style={textStyles} onPress={onPressClose} />
        ) : null}
      </View>
    </View>
  );
};

export default memo<typeof Tag>(Tag);
