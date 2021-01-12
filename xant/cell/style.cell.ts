import { StyleSheet } from 'react-native';

import { CellProps } from './interface';
import { StyleVarType } from '../theme';

export const createStyles = (
  themeVar: StyleVarType,
  {
    size,
    title,
    label,
    border,
    center,
  }: Pick<CellProps, 'size' | 'title' | 'label' | 'border' | 'center'>,
) => {
  const isLarge = size === 'large';

  const titleFontSize = isLarge
    ? themeVar.cell_large_title_font_size
    : themeVar.cell_font_size;
  const isValueAlone = !title && !label;

  return StyleSheet.create({
    wrapperTouchable: {
      backgroundColor: themeVar.cell_background_color,
    },

    wrapper: {
      flexDirection: 'row',
      borderStyle: 'solid',
      position: 'relative',
      marginHorizontal: themeVar.cell_horizontal_padding,
      paddingVertical: themeVar.cell_vertical_padding,
      borderBottomWidth: border ? StyleSheet.hairlineWidth : 0,
      borderBottomColor: themeVar.cell_border_color,
      alignItems: center ? 'center' : 'flex-start',
    },

    title: {
      flex: 1,
      minHeight: themeVar.cell_line_height,
    },

    titleText: {
      color: themeVar.cell_text_color,
      fontSize: titleFontSize,
      lineHeight: themeVar.cell_line_height,
    },

    value: {
      flex: 1,
      minHeight: themeVar.cell_line_height,
    },

    valueText: {
      color: isValueAlone ? themeVar.text_color : themeVar.cell_value_color,
      fontSize: titleFontSize,
      lineHeight: themeVar.cell_line_height,
      textAlign: isValueAlone ? 'left' : 'right',
    },

    labelText: {
      color: themeVar.cell_label_color,
      fontSize: isLarge
        ? themeVar.cell_large_label_font_size
        : themeVar.cell_label_font_size,
      lineHeight: themeVar.cell_label_line_height,
      marginTop: themeVar.cell_label_margin_top,
    },

    iconLeft: {
      marginRight: themeVar.padding_base,
      color: themeVar.cell_text_color,
      fontSize: themeVar.cell_icon_size,
      lineHeight: themeVar.cell_line_height,
    },

    arrow: {
      marginLeft: themeVar.padding_base,
      color: themeVar.cell_right_icon_color,
      fontSize: themeVar.cell_icon_size,
      lineHeight: themeVar.cell_line_height,
    },

    required: {
      position: 'absolute',
      left: -themeVar.padding_md,
      top: themeVar.cell_vertical_padding,
      height: themeVar.cell_line_height,
      width: themeVar.padding_md,
      // backgroundColor: '#f30', // to test ui
      alignItems: 'center',
      justifyContent: 'center',
    },

    requiredText: {
      fontSize: themeVar.cell_font_size,
      color: themeVar.cell_required_color,
    },
  });
};
