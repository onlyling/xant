import React from 'react';
import { ViewProps, TouchableHighlightProps } from 'react-native';

export interface ActionBarProps extends ViewProps {
  /**
   * 是否开启底部安全区适配
   * @default true
   * @deprecated 还未适配 iPhone 全面屏
   */
  safeAreaInsetBottom?: boolean;
}

export interface ActionBarIconProps extends TouchableHighlightProps {
  /**
   * 按钮文字
   */
  text?: string;

  /**
   * 图标
   */
  icon?: React.ReactNode;

  /**
   * 图标颜色
   * @deprecated 图标完全是业务代码写的 JSX，暂时不好控制颜色
   */
  color?: string;

  /**
   * 是否显示图标右上角小红点
   */
  dot?: boolean;

  /**
   * 图标右上角徽标的内容
   */
  badge?: string | number;
}
