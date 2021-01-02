import { ViewStyle } from 'react-native';

export interface OverlayProps {
  /**
   * 最外层样式
   */
  style?: ViewStyle;

  /**
   * 是否展示遮罩层
   * @default false
   */
  show: boolean;

  /**
   * z-index 层级
   * @default 1
   */
  zIndex?: number | string;

  /**
   * 动画时长，单位秒
   * @default 0.3
   */
  duration?: number | string;

  /**
   * 点击弹层
   */
  onPress?: () => void;
}