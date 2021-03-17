import type * as DefaultVar from './default-var';

/** 默认变量 */
export type StyleVarType = typeof DefaultVar;

/** 外界可以参与修改的变量 */
export type StyleVar = Partial<StyleVarType>;

/** 默认初始化状态 */
export interface ThemeProps {
  theme?: StyleVar;
  dark?: boolean;
}
