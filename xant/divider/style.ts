import { StyleSheet } from 'react-native';

import { DividerProps } from './interface';
import { StyleVarType } from '../theme';

export const createStyles = (
  themeVar: StyleVarType,
  {
    dashed,
    hairline,
    contentPosition,
  }: Pick<DividerProps, 'contentPosition' | 'dashed' | 'hairline'>,
) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: themeVar.divider_vertical_margin,
    },

    border: {
      height: 0,
      borderStyle: dashed ? 'dashed' : 'solid',
      borderBottomWidth: hairline ? StyleSheet.hairlineWidth : 1,
      // borderColor: '#000', // to test ui
      borderColor: themeVar.divider_border_color,
      flex: 1,
    },

    borderLeft: {
      marginRight: themeVar.divider_horizontal_margin,
      maxWidth:
        contentPosition === 'left'
          ? themeVar.divider_content_left_width
          : 'auto',
    },

    borderRight: {
      marginLeft: themeVar.divider_horizontal_margin,
      maxWidth:
        contentPosition === 'right'
          ? themeVar.divider_content_right_width
          : 'auto',
    },

    text: {
      color: themeVar.divider_text_color,
      fontSize: themeVar.divider_font_size,
      lineHeight: themeVar.divider_line_height,
    },
  });
};
