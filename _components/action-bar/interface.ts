import type React from 'react';
import type { ViewProps, TouchableHighlightProps } from 'react-native';

import type { ButtonProps } from '../button/interface';

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
   * 带有默认参数渲染
   * @description icon 图标可能无法被响应一些样式，提供这个传递部分默认值的函数
   * @example <ActionBarIcon text="label" iconRender={({ size, color }) => (<Icon name="laptop" size={size} color={color} />)} />
   */
  iconRender?: (p: { size: number; color: string }) => React.ReactNode;

  /**
   * 图标颜色
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

export interface ActionBarButtonProps extends Omit<ButtonProps, 'size'> {
  /**
   * 是否是第一个，左圆弧
   */
  isFirst?: boolean;

  /**
   * 是否是最后一个，右圆弧
   */
  isLast?: boolean;
}
