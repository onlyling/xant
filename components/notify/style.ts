import { StyleSheet } from 'react-native';

import type { NotifyProps } from './interface';
import type { ThemeVarType } from '../theme';

export const createStyles = (themeVar: ThemeVarType, { color, backgroundColor, type }: Pick<NotifyProps, 'color' | 'backgroundColor' | 'type'>) => {
  const typeBackgroundColor = themeVar[`notify_${type}_background_color` as 'notify_primary_background_color'] || themeVar.notify_primary_background_color;

  return StyleSheet.create({
    notify: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: themeVar.notify_padding_horizontal,
      paddingVertical: themeVar.notify_padding_vertical,
      backgroundColor: backgroundColor || typeBackgroundColor,
      // paddingTop: fullScreen ? StatusBar.currentHeight || 0 : 0, // Android 状态栏暂时不知道该怎么盖住，先用边距代替
    },

    text: {
      color: color || themeVar.notify_text_color,
      fontSize: themeVar.notify_font_size,
      lineHeight: themeVar.notify_line_height,
    },
  });
};
