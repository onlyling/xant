import { StyleSheet } from 'react-native';

import { OverlayProps } from './interface';
import { StyleVarType } from '../theme';

export const createStyles = (
  themeVar: StyleVarType,
  { zIndex }: Pick<OverlayProps, 'zIndex'>,
) => {
  return StyleSheet.create({
    overlay: {
      backgroundColor: themeVar.overlay_background_color,
      zIndex: zIndex ? +zIndex : themeVar.overlay_z_index,
      position: 'relative',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },

    overlayActive: {
      position: 'absolute',
    },

    touchable: {
      flex: 1,
    },
  });
};
