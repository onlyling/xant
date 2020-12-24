import { StyleSheet } from 'react-native';

import { TagProps } from './interface';
import { StyleVarType } from '../theme';

export const createStyles = (
  themeVar: StyleVarType,
  {
    type,
    textColor,
    size,
    round,
    plain,
    hairline,
    color,
  }: Pick<
    TagProps,
    'color' | 'textColor' | 'plain' | 'round' | 'size' | 'type' | 'hairline'
  >,
) => {
  let backgroundColor =
    color ||
    themeVar[`tag_${type}_color` as 'tag_default_color'] ||
    themeVar.tag_default_color;

  return StyleSheet.create({
    tag: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      overflow: 'visible',
    },

    wrapper: {
      overflow: 'hidden',
      flexBasis: 'auto',
      backgroundColor: plain
        ? themeVar.tag_plain_background_color
        : backgroundColor,
      borderRadius: round
        ? themeVar.tag_round_border_radius
        : size === 'large'
        ? themeVar.tag_large_border_radius
        : themeVar.tag_border_radius,
      borderWidth: hairline ? StyleSheet.hairlineWidth : 1,
      borderStyle: 'solid',
      borderColor: backgroundColor,
      flexDirection: 'row',
      alignItems: 'center',
    },

    wrapperMark: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: themeVar.tag_round_border_radius,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: themeVar.tag_round_border_radius,
    },

    text: {
      paddingHorizontal: themeVar.tag_horizontal_padding,
      color: plain ? backgroundColor : textColor,
      fontSize:
        size === 'large'
          ? themeVar.tag_large_font_size
          : themeVar.tag_font_size,
      lineHeight: themeVar.tag_line_height,
    },
  });
};
