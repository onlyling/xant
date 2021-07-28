import React, { useMemo, useContext, createContext, memo } from 'react';

import type { ThemeProviderProps, ThemeContextProps } from './interface';
import * as defaultVar from './default-var';

export type { ThemeVarType } from './interface';

const ThemeVarContext = createContext<ThemeContextProps>({
  themeVar: defaultVar,
});

export const useTheme = () => useContext(ThemeVarContext);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const state = useMemo<ThemeContextProps>(
    () => ({
      themeVar: {
        ...defaultVar,
        ...theme,
      },
    }),
    [theme],
  );

  return <ThemeVarContext.Provider value={state}>{children}</ThemeVarContext.Provider>;
};

export default memo<typeof ThemeProvider>(ThemeProvider);
