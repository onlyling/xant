import { ViewStyle } from 'react-native';

export type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center';

export interface PopupProps {
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
   * 是否显示遮罩层
   * @default true
   */
  overlay?: boolean;

  /**
   * 弹出位置，可选值为 `'top' | 'bottom' | 'right' | 'left' | 'center'`
   * @default center
   */
  position?: PopupPosition;

  /**
   * 动画时长，单位秒
   * @default 0.3
   */
  duration?: number | string;

  /**
   * 是否显示圆角
   * @default false
   */
  round?: boolean;

  /**
   * 是否在点击遮罩层后关闭
   * @default true
   */
  closeOnPressOverlay?: boolean;

  /**
   * 是否开启底部安全区适配
   * @default false
   * TODO 待实现
   */
  safeAreaInsetBottom?: boolean;

  /**
   * 是否在显示弹层时才渲染节点
   * @default true
   */
  lazyRender?: boolean;

  /**
   * 点击遮罩层时触发
   */
  onPressOverlay?: () => void;

  /**
   * 打开弹出层时触发
   */
  onOpen?: () => void;

  /**
   * 打开弹出层且动画结束后触发
   */
  onOpened?: () => void;

  /**
   * 关闭弹出层时触发
   */
  onClose?: () => void;

  /**
   * 关闭弹出层且动画结束后触发
   */
  onCloseed?: () => void;
}

export type State = {
  show: boolean;
  zIndex: number;
  lazyRender: boolean;
};
