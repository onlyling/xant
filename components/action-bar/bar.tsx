import React, { memo } from 'react';
import type { ViewStyle } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { ActionBarProps } from './interface';
import { useTheme } from '../theme';

/**
 * ActionBar 动作栏
 * @description 需要和 ActionBarIcon 配合使用
 * @description 如果需要固定到底部或头部，最好和 Portal 搭配，或者放置页面的顶部、底部
 */
const ActionBar: React.FC<ActionBarProps> = ({ safeAreaInsetBottom = false, innerStyle, children, style, ...restProps }) => {
  const insets = useSafeAreaInsets();
  const { themeVar } = useTheme();
  const barStyleSummary: ViewStyle = StyleSheet.flatten([
    {
      backgroundColor: themeVar.action_bar_background_color,
      paddingBottom: safeAreaInsetBottom ? insets.bottom : 0,
    },
    style,
  ]);
  const barInnerStyleSummary: ViewStyle = StyleSheet.flatten([
    {
      height: themeVar.action_bar_height,
      flexDirection: 'row',
      alignItems: 'center',
    },
    innerStyle,
  ]);

  return (
    <View style={barStyleSummary}>
      <View {...restProps} style={barInnerStyleSummary}>
        {children}
      </View>
    </View>
  );
};

export default memo<typeof ActionBar>(ActionBar);
