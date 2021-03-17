import type { StatusBarProps, ViewStyle } from 'react-native';
import type { NavBarProps } from 'xant/nav-bar/interface';

export interface PageProps {
  style?: ViewStyle;

  statusBarProps?: StatusBarProps;

  /**
   * 状态栏文字颜色+页头文字颜色
   *
   * @default `light-content`
   */
  barStyle?: StatusBarProps['barStyle'];

  /**
   * 是否显示页头
   * @default `true`
   */
  showHeader?: boolean;

  /**
   * 页头背景色+状态栏背景色
   */
  headerBackgroundColor?: string;

  /**
   * 页面标题 headerPorps 中的 title，会被后者覆盖
   */
  title?: string;

  /**
   * 点击返回 headerPorps 中的 onPressLeftArrow，会被后者覆盖
   */
  onPressBack?: () => void;

  headerPorps?: NavBarProps;
}

export interface FullPageProps {
  filled?: boolean;
  statusBarStyle?: StatusBarProps['barStyle'];
}
