import React, { memo } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';

import type { ActionBarProps } from './interface';
import { Theme } from '../theme';

/**
 * ActionBar 动作栏
 * @description 需要和 ActionBarIcon 配合使用
 * @description 如果需要固定到底部或头部，最好和 Portal 搭配，或者放置页面的顶部、底部
 */
const ActionBar: React.FC<ActionBarProps> = ({
  children,
  style,
  ...restProps
}) => {
  const { themeVar } = Theme.useContainer();
  const barStyle: ViewStyle = {
    height: themeVar.action_bar_height,
    backgroundColor: themeVar.action_bar_background_color,
    flexDirection: 'row',
    alignItems: 'center',
  };

  return (
    <View {...restProps} style={[barStyle, style]}>
      {children}
    </View>
  );
};

export default memo<typeof ActionBar>(ActionBar);
