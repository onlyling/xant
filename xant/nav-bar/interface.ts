import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export interface NavBarProps {
  /**
   * 最外层的样式
   */
  wrapperStyle?: ViewStyle;

  /**
   * 左箭头样式
   */
  leftArrowStyle?: TextStyle;

  /**
   * 标题样式
   */
  titleTextStyle?: TextStyle;

  /**
   * 标题文字或自定义 JSX
   */
  title?: string | React.ReactNode;

  /**
   * 左侧文字或自定义 JSX
   */
  leftText?: string | React.ReactNode;

  /**
   * 右侧文字或自定义 JSX
   */
  rightText?: string | React.ReactNode;

  /**
   * 是否显示左箭头
   *
   * @default `true`
   */
  leftArrow?: boolean;

  /**
   * 是否显示下边框
   */
  border?: boolean;

  /**
   * 点击左侧按钮
   */
  onPressLeftArrow?: () => void;

  /**
   * 点击右侧按钮文字
   */
  onPressLeftText?: () => void;
}
