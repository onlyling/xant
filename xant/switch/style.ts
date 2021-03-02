import { StyleSheet } from 'react-native';

import { SwitchProps } from './interface';
import { StyleVarType } from '../theme';

export const createStyles = (
  themeVar: StyleVarType,
  { size }: Pick<SwitchProps, 'size'>,
) => {
  const unitSize = size || themeVar.switch_size;
  const switchWidth = unitSize * themeVar.switch_width_ratio;
  const switchHeight = unitSize * themeVar.switch_height_ratio;
  const nodeSize = unitSize * themeVar.switch_node_size_ratio;

  return StyleSheet.create({
    switch: {
      width: switchWidth,
      height: switchHeight,
      borderRadius: switchHeight / 2,
      justifyContent: 'center',
      // backgroundColor: '#f30', // to test ui
      borderWidth: themeVar.switch_border_width,
      borderStyle: themeVar.switch_border_style,
      borderColor: themeVar.switch_border_color,
    },

    node: {
      width: nodeSize,
      height: nodeSize,
      borderRadius: nodeSize / 2,
      backgroundColor: themeVar.switch_node_background_color,
      borderWidth: themeVar.switch_border_width,
      borderStyle: themeVar.switch_border_style,
      borderColor: themeVar.switch_border_color,
    },

    activeNode: {
      left: switchWidth - nodeSize,
    },

    disabled: {
      opacity: themeVar.switch_disabled_opacity,
    },
  });
};
