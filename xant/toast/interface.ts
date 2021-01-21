import { PopupPropsCommon } from '../popup/interface';

export type ToastType = 'text' | 'loading' | 'success' | 'fail';

export type ToastMethods = {
  close: () => void;
  setMessage: (s: string) => void;
};

export interface ToastProps extends Omit<PopupPropsCommon, 'show'> {
  /**
   * 提示类型，可选值为 `'text' | 'loading' | 'success' | 'fail'`
   * @default 'text'
   */
  type?: ToastType;

  /**
   * 位置，可选值为 `'top' | 'bottom' | 'middle'`
   * @default 'middle'
   */
  position?: 'top' | 'bottom' | 'middle';

  /**
   * 文本内容，(支持通过\n换行)?
   * @default ''
   */
  message?: string;

  /**
   * 是否显示背景遮罩层
   * @default false
   */
  overlay?: boolean;

  /**
   * 是否禁止背景点击
   * @default false
   */
  forbidClick?: boolean;

  /**
   * 是否在点击后关闭
   * @default false
   */
  closeOnClick?: boolean;

  /**
   * 是否在点击遮罩层后关闭
   * @default false
   */
  closeOnClickOverlay?: boolean;

  /**
   * 加载图标类型, 可选值为 `'circular' | 'spinner'`
   * @default 'circular'
   */
  loadingType?: 'circular' | 'spinner';

  /**
   * 展示时长(ms)，值为 0 时，toast 不会消失
   * @default 2000
   */
  duration?: number;

  /**
   * 打开弹出层时触发
   */
  onOpen?: Function;

  /**
   * 完全展示后的回调函数
   */
  onOpened?: Function;

  /**
   * 关闭时的回调函数
   */
  onClose?: Function;

  /**
   * 关闭弹出层且动画结束后触发
   */
  onCloseed?: Function;

  hook?: (m: ToastMethods) => void;
}

export interface Toast {
  (p: ToastProps | string): ToastMethods;
  loading(p: ToastProps | string): ToastMethods;
  clear(all: boolean | number): void;
  setDefaultOptions(type: ToastType | ToastProps, options?: ToastProps): void;
  resetDefaultOptions(type: ToastType | ToastProps): void;
}
