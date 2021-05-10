import { StyleSheet } from 'react-native';

import type { ImageProps } from './interface';
import type { ThemeVarType } from '../theme';

export const createStyles = (themeVar: ThemeVarType, { round, radius }: Pick<ImageProps, 'round' | 'radius'>) => {
  return StyleSheet.create({
    wrapper: {
      width: themeVar.image_default_size,
      height: themeVar.image_default_size,
      backgroundColor: themeVar.image_placeholder_background_color,
      position: 'relative',
      borderRadius: round ? 9999 : radius,
      overflow: 'hidden',
    },

    image: { width: '100%', height: '100%' },

    hintWrapper: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },

    // hintIcon: {
    //   fontSize: themeVar.image_placeholder_font_size,
    //   color: themeVar.image_placeholder_text_color,
    // },

    hintText: {
      fontSize: themeVar.image_placeholder_font_size,
      lineHeight: themeVar.line_height_md,
      color: themeVar.image_placeholder_text_color,
      padding: themeVar.padding_md,
      textAlign: 'center',
    },

    loadingIcon: {
      fontSize: themeVar.image_loading_icon_size,
      color: themeVar.image_loading_icon_color,
    },

    errorIcon: {
      fontSize: themeVar.image_error_icon_size,
      color: themeVar.image_error_icon_color,
    },
  });
};
