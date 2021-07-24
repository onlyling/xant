import React, { memo } from 'react';
import type { ViewStyle } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';

import type { CheckboxIconProps } from './interface';
import { createStyles } from './style.icon';
import { useTheme } from '../theme';
import IconSuccess from '../icon/success';
import { isDef } from '../helpers/typeof';

const CheckboxIcon: React.FC<CheckboxIconProps> = ({ active, activeColor, size = 20, shape = 'round', disabled, style, ...restProps }) => {
  const { themeVar } = useTheme();

  if (!isDef(size)) {
    size = themeVar.checkbox_icon_size;
  }

  if (!isDef(activeColor)) {
    activeColor = themeVar.checkbox_checked_icon_color;
  }

  const Styles = createStyles(themeVar, { activeColor, shape, size });

  const styleSummary: ViewStyle = StyleSheet.flatten([Styles.icon, active ? Styles.iconActive : null, disabled ? Styles.iconDisabled : null, style]);

  return (
    <TouchableOpacity {...restProps} style={styleSummary} disabled={disabled}>
      {active ? <IconSuccess size={size} color={disabled ? themeVar.checkbox_icon_border_color : '#fff'} style={Styles.iconStyle} /> : null}
    </TouchableOpacity>
  );
};

export default memo(CheckboxIcon);
