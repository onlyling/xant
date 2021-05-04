import { StyleSheet } from 'react-native';

import type { StyleVarType } from '../theme';

export const createStyles = (themeVar: StyleVarType) => {
  return StyleSheet.create({
    wrapper: {
      height: themeVar.nav_bar_height,
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: themeVar.background_color,
      paddingHorizontal: themeVar.padding_md,
    },

    titleText: {
      color: themeVar.nav_bar_title_text_color,
      textAlign: 'center',
      fontSize: themeVar.nav_bar_title_font_size,
    },

    leftWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: themeVar.padding_md,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
    },

    leftText: {
      color: themeVar.nav_bar_icon_color,
      fontSize: 14,
    },

    leftArrow: {
      color: themeVar.nav_bar_icon_color,
      marginRight: themeVar.padding_md,
      lineHeight: themeVar.nav_bar_height,
      paddingRight: themeVar.padding_base,
      // backgroundColor: '#000', // to test ui
    },

    rithtWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: themeVar.padding_md,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
    },
  });
};
