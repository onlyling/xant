export interface ProgressProps {
  /**
   * 进度百分比
   * @default 0
   */
  percentage?: number;

  /**
   * 进度条粗细，默认单位为 px
   * @default progress_height
   */
  strokeWidth?: number;

  /**
   * 进度条颜色
   * @default 主题色
   */
  color?: string;

  /**
   * 轨道颜色
   *
   * @default '#e5e5e5'
   */
  trackColor?: string;

  /**
   * 进度文字内容
   * @default 百分比
   */
  pivotText?: string;

  /**
   * 进度文字背景色
   * @default 同进度条颜色
   */
  pivotColor?: string;

  /**
   * 进度文字颜色
   * @default white
   */
  textColor?: string;

  /**
   * 是否置灰
   * @default false
   */
  inactive?: boolean;

  /**
   * 是否显示进度文字
   * @default true
   */
  showPivot?: boolean;

  /**
   * 是否为方形按钮
   * @default false
   */
  square?: boolean;

  /**
   * 是否开启进度条变动动画
   * @default false
   */
  animated?: boolean;

  /**
   * 动画持续时间
   * @description animation_duration_base
   */
  animationDuration?: number;

  /**
   * 动画结束的回调
   */
  onAnimationEnd?: () => void;
}

export interface ProgressPageProps {
  /**
   * 页面是否在加载中
   * @default false
   */
  loading?: boolean;

  /**
   * 背景色，默认会占满个屏幕
   * @default progress_page_background_color
   */
  backgroundColor?: string;
}
