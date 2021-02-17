import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { PopupPropsCommon } from '../popup/interface';

export type NotifyType = 'primary' | 'success' | 'danger' | 'warning';

export type NotifyMethods = {
  close: () => void;
  setMessage: (s: React.ReactNode) => void;
};

export interface NotifyProps
  extends Omit<
    PopupPropsCommon,
    'overlay' | 'closeOnClickOverlay' | 'onPressOverlay' | 'duration'
  > {
  /**
   * 最外层样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 文字样式
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * 类型，可选值为 `'primary' | 'success' | 'danger' | 'warning'`
   *
   * @default `danger`
   */
  type?: NotifyType;

  /**
   * 展示文案
   */
  message?: React.ReactNode;

  /**
   * 字体颜色
   */
  color?: string;

  /**
   * 背景颜色
   */
  backgroundColor?: string;

  /**
   * 点击时的回调函数
   */
  onPress?: () => void;
}

export interface NotifyOptions extends Omit<NotifyProps, 'show'> {
  /**
   * 展示时长(ms)，值为 0 时，notify 不会消失
   * @default 3000
   */
  duration?: number | string;

  /**
   * 在函数使用的时候一个 hook，后面有时间优化一下
   * @deprecated 内部使用
   */
  hook?: (m: NotifyMethods) => void;
}

export interface NotifyMethodProps extends NotifyOptions {}

export interface Notify {
  (p: NotifyMethodProps | string): NotifyMethods;
  Component: React.FC<NotifyProps>;
  // clear(all: boolean | number): void;
  // setDefaultOptions(
  //   type: NotifyType | NotifyProps,
  //   options?: NotifyProps,
  // ): void;
  // resetDefaultOptions(type: NotifyType | NotifyProps): void;
}
