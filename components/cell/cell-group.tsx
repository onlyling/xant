import React, { memo } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

import type { CellGroupProps } from './interface';
import { createStyles } from './style.cell-group';
import { useTheme } from '../theme';

/**
 * CellGroup 单元格组
 * @description 一组单元格，可以设置一个标题。
 */
const CellGroup: React.FC<CellGroupProps> = ({ children, title, style, textStyle, border = true }) => {
  const { themeVar } = useTheme();
  const Styles = createStyles(themeVar, { border });

  const titleStyleSummary: ViewStyle = StyleSheet.flatten([Styles.title, style]);
  const titleTextStyleSummary: TextStyle = StyleSheet.flatten([Styles.text, textStyle]);

  /** 标题 可能是自定义 JSX */
  const titleJSX = title ? React.isValidElement(title) ? title : <Text style={titleTextStyleSummary}>{title}</Text> : null;

  return (
    <>
      {titleJSX ? <View style={titleStyleSummary}>{titleJSX}</View> : null}
      <View style={Styles.wrapper}>{children}</View>
    </>
  );
};

export default memo<typeof CellGroup>(CellGroup);
