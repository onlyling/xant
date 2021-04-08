import React, { useMemo } from 'react';

import type { ThemeProps } from './interface';
import container from './container';

export type { StyleVarType } from './interface';

/** 主题 */
export const Theme = container;

const ThemeView: React.FC<ThemeProps> = ({
  children,
  theme,
  dark = false,
  fullScreen,
}) => {
  const state = useMemo<ThemeProps>(
    () => ({
      theme,
      dark,
      fullScreen,
    }),
    [theme, dark, fullScreen],
  );

  return <Theme.Provider initialState={state}>{children}</Theme.Provider>;
};

export default ThemeView;
