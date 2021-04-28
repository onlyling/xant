import type {
  ImageProps as ImageReactNativeProps,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';

export interface ImageProps extends ImageReactNativeProps {
  wrapperStyle?: StyleProp<ViewStyle>;

  /**
   * 点击图片的事件
   */
  onPress?: (e: GestureResponderEvent) => void;

  /**
   * 替代文本
   */
  alt?: string;

  /**
   * 圆角大小
   *
   * @default `0`
   */
  radius?: number;

  /**
   * 是否显示为圆形
   */
  round?: boolean;

  /**
   * 是否展示图片加载失败提示
   *
   * @default `true`
   */
  showError?: boolean;

  /**
   * 是否展示图片加载中提示
   *
   * @default `true`
   */
  showLoading?: boolean;

  /**
   * 是否开启图片显示动画
   *
   * @default `true`
   */
  animated?: boolean;

  /**
   * 动画时间，单位毫秒
   *
   * @default `300`
   */
  duration?: number;
}
