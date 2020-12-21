import React from 'react';
import { ViewStyle, TextStyle, TouchableHighlightProps } from 'react-native';

export type CellGroupProps = {
  /**
   * 分组名称
   */
  title?: string | React.ReactNode;

  /**
   * 自定义样式
   */
  style?: ViewStyle;

  /**
   * 自定义文字样式
   */
  textStyle?: TextStyle;

  /**
   * 是否显示外边框
   *
   * @default `true`
   */
  border?: boolean;
};

export interface CellProps extends TouchableHighlightProps {
  wrapperStyle?: ViewStyle;

  titleStyle?: ViewStyle;

  titleTextStyle?: TextStyle;

  valueStyle?: ViewStyle;

  valueTextStyle?: TextStyle;

  labelTextStyle?: TextStyle;

  /** 左侧标题 */
  title?: React.ReactNode;

  /** 右侧内容 */
  value?: React.ReactNode;

  /** 标题下方的描述信息 */
  label?: React.ReactNode;

  /** 单元格大小，可选值为 large */
  size?: 'large';

  /** 左侧图标名称或图片链接 */
  icon?: React.ReactNode;

  /** 自定义右侧按钮，默认为 arrow */
  rightIcon?: React.ReactNode;

  /** 是否显示内边框 */
  border?: Boolean;

  /** 是否开启点击反馈 */
  clickable?: Boolean;

  /** 是否展示右侧箭头并开启点击反馈 */
  isLink?: Boolean;

  /** 是否使内容垂直居中 */
  center?: Boolean;

  /** 箭头方向 */
  arrowDirection?: 'left' | 'up' | 'right' | 'down';

  /** 是否显示表单必填星号 */
  required?: boolean;
}
