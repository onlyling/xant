import { StyleSheet } from 'react-native';

import type { DialogProps } from './interface';
import type { ThemeVarType } from '../theme';

export const createStyles = (
  themeVar: ThemeVarType,
  { messageAlign, width }: Pick<DialogProps, 'messageAlign' | 'width'>,
) => {
  return StyleSheet.create({
    dialog: {
      // position: 'absolute',
      // top: '45%', // vant 中在上下 45% 的位置居中显示，popop 已经让 center 的位置居中，现在上移 5% 应该就好了？
      marginTop: '-5%',
      width: width || themeVar.dialog_width,
      overflow: 'hidden',
      backgroundColor: themeVar.dialog_background_color,
      borderRadius: themeVar.dialog_border_radius,
    },

    titleText: {
      textAlign: 'center',
      paddingTop: themeVar.dialog_header_padding_top,
      lineHeight: themeVar.dialog_header_line_height,
      fontWeight: themeVar.dialog_header_font_weight,
      fontSize: themeVar.dialog_font_size,
    },

    contentIsolated: {
      minHeight: 104,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    messageText: {
      paddingHorizontal: themeVar.dialog_message_horizontal_padding,
      paddingVertical: 26,
      fontSize: themeVar.dialog_message_font_size,
      lineHeight: themeVar.dialog_message_line_height,
      textAlign: messageAlign,
    },

    messageTextHasTitle: {
      paddingTop: themeVar.dialog_has_title_message_padding_top,
      color: themeVar.dialog_has_title_message_text_color,
    },

    footer: {
      flexDirection: 'row',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: themeVar.border_color,
    },

    footerRound: {
      paddingHorizontal: themeVar.dialog_message_horizontal_padding,
      paddingTop: themeVar.padding_xs,
      paddingBottom: themeVar.padding_md,
    },

    btn: {
      flex: 1,
      marginHorizontal: 0,
      marginVertical: 0,
      borderWidth: 0,
      borderRadius: 0,
      height: themeVar.dialog_button_height,
    },

    btnRound: {
      height: themeVar.dialog_round_button_height,
      marginVertical: 0,
      marginLeft: 0,
      marginRight: 0,
    },

    btnLeft: {
      borderLeftWidth: StyleSheet.hairlineWidth,
      borderColor: themeVar.border_color,
    },
  });
};
