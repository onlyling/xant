import { StyleSheet } from 'react-native';

// import type { CheckboxIconProps } from './interface';
import type { ThemeVarType } from '../theme';

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: themeVar.checkbox_label_color,
      lineHeight: themeVar.checkbox_icon_size,
      minHeight: themeVar.checkbox_icon_size,
    },
    labelDisabled: {
      color: themeVar.checkbox_disabled_label_color,
    },
  });
};
