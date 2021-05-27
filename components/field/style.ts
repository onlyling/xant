import { StyleSheet } from 'react-native';

// import type { TextInputProps } from './interface';
import type { ThemeVarType } from '../theme';

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    leftWrapper: {
      flex: 0,
      width: themeVar.field_label_width,
      marginRight: themeVar.field_label_margin_right,
      // backgroundColor: '#f30', // to test ui
    },
    label: {
      color: themeVar.field_label_color,
    },
  });
};
