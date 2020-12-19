import React, { useState } from 'react';
import { createContainer } from 'unstated-next';

import * as DefaultVar from './default-var';

/** 默认变量 */
export type StyleVarType = typeof DefaultVar;

/** 外界可以参与修改的变量 */
type StyleVar = Partial<StyleVarType>;

/** 默认初始化状态 */
type InitialState = {
  theme?: StyleVar;
  dark?: boolean;
};

/** 默认初始化配置 */
const defaultInitialState: InitialState = {
  theme: {},
  dark: false,
};

/** 主题默认 hook */
const useCounter = (initialState: InitialState = defaultInitialState) => {
  // 主题里面的变量
  const [themeVar, setThemeVar] = useState<StyleVarType>(
    Object.assign({}, DefaultVar, initialState.theme),
  );

  // 是否是 dark 模式
  const [isDark, setIsDark] = useState(initialState.dark);

  return { themeVar, setThemeVar, isDark, setIsDark };
};

/** 主题、变量等 */
export const Theme = createContainer(useCounter);

export type ThemeViewProps = {} & InitialState;

const ThemeView: React.FC<ThemeViewProps> = ({ children, theme }) => {
  return (
    <Theme.Provider
      initialState={{
        theme,
      }}
    >
      {children}
    </Theme.Provider>
  );
};

export default ThemeView;
