import { useState } from 'react';
import { createContainer } from 'unstated-next';

import * as DefaultVar from './default-var';
import type { ThemeProps, StyleVarType } from './interface';

/** 默认初始化配置 */
const defaultInitialState: ThemeProps = {
  theme: {},
  dark: false,
  fullScreen: false,
};

/**
 * 主题默认 hook
 */
const useCounter = (initialState: ThemeProps = defaultInitialState) => {
  // 主题里面的变量
  const [themeVar, setThemeVar] = useState<StyleVarType>(
    Object.assign({}, DefaultVar, initialState.theme),
  );

  // 是否是 dark 模式
  const [isDark, setIsDark] = useState(initialState.dark);

  // 是否是全屏的方案
  const [fullScreen, setFullScreen] = useState(initialState.fullScreen);

  return {
    themeVar,
    setThemeVar,
    isDark,
    setIsDark,
    fullScreen,
    setFullScreen,
  };
};

export default createContainer(useCounter);
