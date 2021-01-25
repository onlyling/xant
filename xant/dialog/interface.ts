import * as React from 'react';

import { PopupPropsCommon } from '../popup/interface';

export type DialogType = 'alert' | 'confirm';

type messageAlign = 'center' | 'left' | 'right';

type DialogTheme = 'default' | 'round';

type DialogAction = 'cancel' | 'confirm';

export type DialogMethods = {
  close: () => void;
};

export interface DialogProps extends PopupPropsCommon {
  /**
   * 标题
   */
  title?: React.ReactNode;

  /**
   * 弹窗宽度
   * @default 320
   */
  width?: number | string;

  /**
   * 文本内容，支持通过\n换行
   */
  message?: React.ReactNode;

  /**
   * 内容对齐方式，可选值为`'center' | 'left' | 'right'`
   * @default center
   */
  messageAlign?: messageAlign;

  /**
   * 样式风格，可选值为`'default' | 'round'`
   */
  theme?: DialogTheme;

  /**
   * 是否展示确认按钮
   * @default true
   */
  showConfirmButton?: boolean;

  /**
   * 是否展示取消按钮
   * @default false
   */
  showCancelButton?: boolean;

  /**
   * 确认按钮文案
   * @default 确认
   */
  confirmButtonText?: string;

  /**
   * 确认按钮颜色
   */
  confirmButtonColor?: string;

  /**
   * 取消按钮文案
   * @default 取消
   */
  cancelButtonText?: string;

  /**
   * 取消按钮颜色
   */
  cancelButtonColor?: string;

  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (action: DialogAction) => boolean | Promise<boolean>;

  /**
   * 在函数使用的时候一个 hook，后面有时间优化一下
   */
  hook?: (m: DialogMethods) => void;
}

export interface Dialog {
  (p: DialogProps): DialogMethods;
  Component: React.FC<DialogProps>;
  // clear(all: boolean | number): void;
  // setDefaultOptions(
  //   type: DialogType | DialogProps,
  //   options?: DialogProps,
  // ): void;
  // resetDefaultOptions(type: DialogType | DialogProps): void;
}
