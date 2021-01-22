import React, { memo } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import { ActionBarIconProps } from './interface';
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
  dot,
  badge,
  underlayColor,
  ...restProps
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar);

  return (
    <TouchableHighlight
      {...restProps}
      underlayColor={underlayColor || themeVar.action_bar_icon_active_color}
    >
      <View style={Styles.wrapper}>
        <Badge wrapperStyle={Styles.badgeWrapper} dot={dot} content={badge}>
          <Text style={Styles.icon}>{icon}</Text>
        </Badge>
        <Text style={Styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default memo<typeof ActionBarIcon>(ActionBarIcon);
