import type { TextInputProps as RNTextInputProps, ViewStyle, StyleProp } from 'react-native';

export interface TextInputProps extends RNTextInputProps {
  wrapperStyle?: StyleProp<ViewStyle>;

  /**
   * 输入项
   * @default 'text'
   */
  type?: 'text' | 'digit' | 'number' | 'textarea' | 'password';

  /**
   * 多行的时候最低多少行的高度
   * @default 2
   */
  rows?: number | string;

  /**
   * 是否启用清除图标，点击清除图标后会清空输入框
   * @example 如果点击不触发，需要在 ScrollView 组件上添加 keyboardShouldPersistTaps="handled"
   * @default false
   */
  clearable?: boolean;

  /**
   * 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示
   * @default 'focus'
   */
  clearTrigger?: 'always' | 'focus';

  /**
   * 输入内容格式化函数
   */
  formatter?: (s: string) => string;

  /**
   * 格式化函数触发的时机，可选值为 onEndEditing | onChangeText
   * @default `onChangeText`
   */
  formatTrigger?: 'onEndEditing' | 'onChangeText';
}
