import { StyleSheet } from 'react-native';

import type { ThemeVarType } from '../theme';

export const createStyles = (themeVar: ThemeVarType) => {
  const headerBtn = {
    lineHeight: themeVar.picker_title_text_line_height,
    height: themeVar.picker_title_text_line_height,
    paddingHorizontal: themeVar.picker_title_text_padding_horizontal,
  };

  return StyleSheet.create({
    picker: {
      backgroundColor: themeVar.picker_background_color,
      borderRadius: themeVar.border_radius_md,
      overflow: 'hidden',
    },

    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(255,255,255,0.9)',
      zIndex: 2,
      justifyContent: 'center',
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    cancelText: {
      ...headerBtn,
      color: themeVar.picker_title_cancel_text_color,
    },

    confirmText: {
      ...headerBtn,
      color: themeVar.picker_title_confirm_text_color,
    },

    titleText: {
      ...headerBtn,
      color: themeVar.picker_title_title_text_color,
      fontWeight: 'bold',
      fontSize: themeVar.font_size_lg,
    },

    mask: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 3,
      backgroundColor: themeVar.picker_column_mask_background_color,
      borderColor: themeVar.picker_column_mask_border_color,
      borderWidth: 0,
    },
  });
};
