import type React from 'react';

import type { PopupPropsCommon } from '../popup/interface';

export type ActionSheetAction = 'cancel' | 'item' | 'overlay';

export interface Action {
  /** 标题 */
  name: string;

  /** 二级标题 */
  subname?: string;

  /** 选项文字颜色 */
  color?: string;

  /** 是否为加载状态 */
  loading?: boolean;

  /** 是否为禁用状态 */
  disabled?: boolean;

  /** 点击时触发的回调函数 */
  callback?: () => void;
}

export interface ActionSheetProps extends PopupPropsCommon {
  /**
   * 面板选项列表
   */
  actions: Action[];

  /**
   * 顶部标题
   */
  title?: React.ReactNode;

  /**
   * 取消按钮文字
   */
  cancelText?: React.ReactNode;

  /**
   * 选项上方的描述信息
   */
  description?: React.ReactNode;

  /**
   * 是否显示圆角
   * @default true
   */
  round?: boolean;

  /**
   * 是否在显示弹层时才渲染节点
   * @default true
   */
  lazyRender?: boolean;

  /**
   * 点击取消按钮时触发
   */
  onCancel?: () => void;

  /**
   * 点击选项时触发，禁用或加载状态下不会触发
   */
  onSelect?: (action: Action, index: number) => void;
}

export interface ActionSheetOptions extends Omit<ActionSheetProps, 'show' | 'actions' | 'onCancel' | 'onSelect'> {
  /**
   * 面板选项列表
   */
  actions: (string | Action)[];

  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (action: ActionSheetAction, item?: Action, index?: number) => boolean | Promise<boolean>;

  /**
   * 操作完成后的回调
   */
  callback?: (action: ActionSheetAction, item?: Action, index?: number) => void;
}

export interface ActionSheetMethodProps extends ActionSheetOptions {}

export interface ActionSheetInstance {
  (p: ActionSheetOptions): Promise<{ item: Action; index: number }>;
  Component: React.FC<ActionSheetProps>;
}
