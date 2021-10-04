import type React from 'react';

export type PickerObjectOption = {
  label: string | number;
  value: string | number;
  disabled?: boolean;
  // for custom filed names
  [key: string]: any;
};

export type PickerOption = string | number | PickerObjectOption;

export type PickerObjectColumn = {
  values?: PickerOption[];
  children?: PickerColumn;
  className?: unknown;
  defaultValue?: number | string;
  // for custom filed names
  [key: string]: any;
};

export type PickerColumn = PickerOption[] | PickerObjectColumn;

export type Column = PickerOption | PickerColumn;

export interface PickerProps {
  /**
   * 对象数组，配置每一列显示的数据
   */
  columns: Column[];

  /**
   * 顶部栏标题
   */
  title?: React.ReactNode;

  /**
   * 确认按钮文字
   * @default '确认'
   */
  confirmButtonText?: string;

  /**
   * 取消按钮文字
   * @default '取消'
   */
  cancelButtonText?: string;

  /**
   * 顶部栏位置
   * @default 'top'
   */
  toolbarPosition?: 'top' | 'bottom';

  /**
   * 是否显示加载状态
   * @default false
   */
  loading?: boolean;

  /**
   * 是否显示顶部栏
   * @default true
   */
  showToolbar?: boolean;

  /**
   * 选项高度
   * @default 44
   */
  itemHeight?: number;

  /**
   * 可见的选项个数
   */
  visibleItemCount?: number;
}

export interface PickerColumnProps {
  /**
   * 选项高度
   */
  itemHeight: number;

  /**
   * 选项
   */
  options: PickerObjectOption[];

  /**
   * 默认值
   */
  defaultValue?: string | number;

  /**
   * 可见的选项个数
   * @default 6
   */
  visibleItemCount?: number;

  /**
   * 当值变化的时候
   */
  onChangeValue: (v: PickerObjectOption | null) => void;
}
