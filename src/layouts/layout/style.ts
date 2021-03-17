import { StatusBar, StyleSheet } from 'react-native';

import type { StyleVarType } from 'xant/theme';

export const createStyles = (
  themeVar: StyleVarType,
  { primaryColor }: { primaryColor: string },
) => {
  return StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: themeVar.background_color,
    },
    barStyle: {
      height: StatusBar.currentHeight,
      backgroundColor: primaryColor,
    },
  });
};
