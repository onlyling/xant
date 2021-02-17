import React from 'react';

import { PopupPropsCommon } from '../popup/interface';

export interface Action {
  /** 标题 */
  name: string;

  /** 二级标题 */
  subname?: string;

  /** 选项文字颜色 */
  color?: string;

  /** 是否为加载状态 */
  loading?: string;

  /** 是否为禁用状态 */
  disabled?: string;

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
}

export interface ActionSheetOptions
  extends Omit<ActionSheetProps, 'show' | 'actions'> {
  actions: (string | Action)[];
}

export interface ActionSheetMethodPorps extends ActionSheetProps {}

export interface ActionSheet {
  (p: ActionSheetOptions): Promise<any>;
  Component: React.FC<ActionSheetProps>;
}
