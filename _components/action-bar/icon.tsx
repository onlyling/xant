import React, { memo } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import type { ActionBarIconProps } from './interface';
import { createStyles } from './style.icon';
import Badge from '../badge';
import { Theme } from '../theme';

/**
 * ActionBarIcon 动作栏里面的图标
 * @description icon 的图标可能需要在业务代码中自己控制
 */
const ActionBarIcon: React.FC<ActionBarIconProps> = ({
  text,
  icon,
  iconRender,
  dot,
  badge,
  color,
  underlayColor,
  ...restProps
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { color });

  const IconJSX =
    (icon && <Text style={Styles.icon}>{icon}</Text>) ||
    (iconRender &&
      iconRender({
        color: color || themeVar.action_bar_icon_color,
        size: themeVar.action_bar_icon_size,
      })) ||
    null;

  return (
    <TouchableHighlight
      {...restProps}
      underlayColor={underlayColor || themeVar.action_bar_icon_active_color}
    >
      <View style={Styles.wrapper}>
        <Badge wrapperStyle={Styles.badgeWrapper} dot={dot} content={badge}>
          {IconJSX}
        </Badge>
        <Text style={Styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default memo<typeof ActionBarIcon>(ActionBarIcon);
