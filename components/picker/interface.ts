import type React from 'react';

export type PickerValue = string | number;

export type PickerObjectOption = {
  label: PickerValue;
  value: PickerValue;
  disabled?: boolean;
  children?: PickerObjectOption[];
  // for custom filed names
  [key: string]: any;
};

/** 多列选择 带默认值 */
export type PickerObjectColumn = {
  options: {
    label: PickerValue;
    value: PickerValue;
    disabled?: boolean;
    // for custom filed names
    [key: string]: any;
  }[];
  defaultValue?: PickerValue;
  // for custom filed names
  [key: string]: any;
};

export type Column = PickerObjectOption | PickerObjectColumn | PickerObjectOption[];

export interface PickerProps {
  value?: PickerValue | PickerValue[];

  defaultValue?: PickerValue | PickerValue[];

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

  /**
   * 选项改变时触发
   * @description 单列：选中值，选中值对应的索引
   * @description 多列：所有列选中值，当前列对应的索引
   */
  onChange?: () => void;

  /**
   * 点击取消按钮时触发
   * @description 单列：选中值，选中值对应的索引
   * @description 多列：所有列选中值，所有列选中值对应的索引
   */
  onCancel?: () => void;

  /**
   * 点击完成按钮时触发
   * @description 单列：选中值，选中值对应的索引
   * @description 多列：所有列选中值，所有列选中值对应的索引
   */
  onConfirm?: () => void;
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
  onChangeValue: (v: PickerObjectOption | undefined) => void;
}
