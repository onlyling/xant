import { StyleSheet } from 'react-native';

// import type { ActionBarButtonProps } from './interface';
import type { ThemeVarType } from '../theme';

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    button: {
      flex: 1,
      height: themeVar.action_bar_button_height,
      fontWeight: themeVar.font_weight_bold,

      borderWidth: 0,
      borderRadius: 0,
    },

    textStyle: {
      fontSize: themeVar.font_size_md,
    },

    first: {
      marginLeft: 5,
      borderTopLeftRadius: themeVar.border_radius_max,
      borderBottomLeftRadius: themeVar.border_radius_max,
    },

    last: {
      marginRight: 5,
      borderTopRightRadius: themeVar.border_radius_max,
      borderBottomRightRadius: themeVar.border_radius_max,
    },
  });
};
