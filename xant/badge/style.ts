import { StyleSheet } from 'react-native';

import { BadgeProps } from './interface';
import { StyleVarType } from '../theme';

export const createStyles = (
  themeVar: StyleVarType,
  { color }: Pick<BadgeProps, 'color'>,
) => {
  return StyleSheet.create({
    badge: {
      minWidth: themeVar.badge_size,
      borderRadius: themeVar.border_radius_max,
      backgroundColor: color || themeVar.badge_background_color,
      color: themeVar.badge_color,
      fontSize: themeVar.badge_font_size,
      fontFamily: themeVar.badge_font_family,
      fontWeight: themeVar.badge_font_weight,
      textAlign: 'center',
      paddingHorizontal: themeVar.badge_horizontal_padding,
      paddingVertical: themeVar.badge_vertical_padding,
    },

    dot: {
      width: themeVar.badge_dot_size,
      height: themeVar.badge_dot_size,
      minWidth: 0,
    },

    wrapper: {
      position: 'relative',
      // backgroundColor: '#000', // to test ui
    },

    fixed: {
      position: 'absolute',
      right: 0,
      top: 0,
      // backgroundColor: '#f30', // to test ui
      zIndex: 2,
    },
  });
};
