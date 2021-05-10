import { StyleSheet } from 'react-native';

import type { ActionBarIconProps } from './interface';
import type { ThemeVarType } from '../theme';

export const createStyles = (themeVar: ThemeVarType, { color }: Pick<ActionBarIconProps, 'color'>) => {
  return StyleSheet.create({
    wrapper: {
      height: '100%',
      minWidth: themeVar.action_bar_icon_width,
      justifyContent: 'center',
      alignItems: 'center',
    },

    badgeWrapper: {
      marginBottom: 5,
      // backgroundColor: '#f30', // to test color
    },

    icon: {
      textAlign: 'center',
      fontSize: themeVar.action_bar_icon_size,
      color: color || themeVar.action_bar_icon_color,
      lineHeight: themeVar.action_bar_icon_size,
    },

    text: {
      textAlign: 'center',
      color: themeVar.action_bar_icon_text_color,
      fontSize: themeVar.action_bar_icon_font_size,
    },
  });
};
