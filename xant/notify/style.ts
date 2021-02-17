import { StyleSheet, StatusBar } from 'react-native';

import { NotifyProps } from './interface';
import { StyleVarType } from '../theme';

export const createStyles = (
  themeVar: StyleVarType,
  {
    color,
    backgroundColor,
    type,
  }: Pick<NotifyProps, 'color' | 'backgroundColor' | 'type'>,
) => {
  const typeBackgroundColor =
    themeVar[
      `notify_${type}_background_color` as 'notify_primary_background_color'
    ] || themeVar.notify_primary_background_color;

  return StyleSheet.create({
    notify: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: themeVar.notify_horizontal_padding,
      paddingVertical: themeVar.notify_vertical_padding,
      backgroundColor: backgroundColor || typeBackgroundColor,
      paddingTop: StatusBar.currentHeight || 0, // Android 状态栏暂时不知道该怎么盖住，先用边距代替
    },

    text: {
      color: color || themeVar.notify_text_color,
      fontSize: themeVar.notify_font_size,
      lineHeight: themeVar.notify_line_height,
    },
  });
};
