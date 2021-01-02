import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { CellGroupProps } from './interface';
import { createStyles } from './style.cell-group';
import { Theme } from '../theme';

/**
 * CellGroup 单元格组
 * @description 一组单元格，可以设置一个标题。
 */
const CellGroup: React.FC<CellGroupProps> = ({
  children,
  title,
  style,
  textStyle,
  border = true,
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { border });

  const titleStyles = [Styles.title, style];
  const titleTextStyles = [Styles.text, textStyle];
  const wrapperStyles = [Styles.wrapper];

  /** 标题 可能是自定义 JSX */
  const TitleJSX = title ? (
    React.isValidElement(title) ? (
      title
    ) : (
      <Text style={titleTextStyles}>{title}</Text>
    )
  ) : null;

  return (
    <>
      <View style={titleStyles}>{TitleJSX}</View>
      <View style={wrapperStyles}>{children}</View>
    </>
  );
};

export default memo<typeof CellGroup>(CellGroup);
