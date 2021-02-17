import { StyleSheet, Dimensions } from 'react-native';
import { padding_md } from 'xant';

import { StyleVarType } from '../theme';

export const createStyles = (themeVar: StyleVarType) => {
  return StyleSheet.create({
    // actionSheet: {
    //   // maxHeight: themeVar.action_sheet_max_height,
    //   // height: 'auto',
    //   // backgroundColor: themeVar.white,
    // },

    title: {
      flexShrink: 0,
      fontWeight: themeVar.font_weight_bold,
      fontSize: themeVar.action_sheet_header_font_size,
      lineHeight: themeVar.action_sheet_header_height,
      textAlign: 'center',
    },

    description: {
      flexShrink: 0,
      paddingVertical: 20,
      textAlign: 'center',
      marginHorizontal: themeVar.padding_md,
      color: themeVar.action_sheet_description_color,
      fontSize: themeVar.action_sheet_description_font_size,
      lineHeight: themeVar.action_sheet_description_line_height,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: themeVar.border_color,
    },

    content: {
      // Popup 的高度是 auto，只有限制内容的高度
      maxHeight: Dimensions.get('window').height - 200,
    },

    btn: {
      paddingVertical: 14,
      paddingHorizontal: themeVar.padding_md,
    },

    item: {
      textAlign: 'center',
      fontSize: themeVar.action_sheet_item_font_size,
    },

    subname: {
      marginTop: themeVar.padding_xs,
      color: themeVar.action_sheet_subname_color,
      fontSize: themeVar.action_sheet_subname_font_size,
      lineHeight: themeVar.action_sheet_subname_line_height,
    },

    gap: {
      height: themeVar.action_sheet_cancel_padding_top,
      backgroundColor: themeVar.action_sheet_cancel_padding_color,
    },

    cancel: {
      flexShrink: 0,
      textAlign: 'center',
      color: themeVar.action_sheet_cancel_text_color,
      fontSize: themeVar.action_sheet_item_font_size,
    },
  });
};
