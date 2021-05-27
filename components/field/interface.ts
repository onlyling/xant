import type React from 'react';

import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { TextInputProps } from '../text-input/interface';
import type { CellProps } from '../cell/interface';

export interface FieldProps extends Pick<CellProps, 'innerStyle' | 'valueStyle' | 'size' | 'required' | 'border' | 'center'>, Omit<TextInputProps, 'wrapperStyle'> {
  /**
   * 输入框左侧文本
   */
  label?: React.ReactNode;

  /**
   * 输入框左侧样式
   */
  labelStyle?: StyleProp<ViewStyle>;

  /**
   * 输入框左侧文本样式
   */
  labelTextStyle?: StyleProp<TextStyle>;

  /**
   * 左侧文本对齐方式，可选值为 left center right
   * @default 'left'
   */
  labelAlign?: 'left' | 'right' | 'center';

  /**
   * 是否在 label 后面添加冒号
   * @default false
   */
  colon?: boolean;

  /**
   * 冒号的文案
   * @default '：'
   */
  colonLabel?: string;
}
