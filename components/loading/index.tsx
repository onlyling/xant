import React, { memo } from 'react';
import { View, Text } from 'react-native';

import type { LoadingProps } from './interface';
import { createStyles } from './style';
import Circular from './circular';
import Spinner from './spinner';
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

  const TextJSX = children ? (
    React.isValidElement(children) ? (
      children
    ) : (
      <Text style={Styles.text}>{children}</Text>
    )
  ) : null;

  return (
    <View style={Styles.loading}>
      {type === 'circular' ? (
        <Circular size={size} color={color} />
      ) : (
        <Spinner size={size} color={color} />
      )}
      {TextJSX}
    </View>
  );
};

export default memo<typeof Loading>(Loading);