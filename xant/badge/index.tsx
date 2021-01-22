import React, { useState, useCallback, memo } from 'react';
import { View, Text, LayoutChangeEvent } from 'react-native';

import { BadgeProps } from './interface';
import { createStyles } from './style';
import { Theme } from '../theme';

type State = {
  width: number;
  height: number;
};

/**
 * Badge 徽标
 * @description 在右上角展示徽标数字或小红点。
 * @description RN translateX translateY 无法用百分数，需要通过 onLayout 拿到具体的数字后计算偏移量
 */
const Badge: React.FC<BadgeProps> = ({
  children,
  content,
  dot,
  max,
  color,
  style,
}) => {
  const [state, setState] = useState<State>({ width: 0, height: 0 });

  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar, { color });

  /** 监听布局 */
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    console.log(e.nativeEvent.layout.height);
    setState(e.nativeEvent.layout);
  }, []);

  if (max && typeof content === 'number' && content > +max) {
    content = `${max}+`;
  }

  const BadgeJSX = (
    <Text style={[Styles.badge, dot ? Styles.dot : null, style]}>
      {dot ? null : content}
    </Text>
  );

  if (children) {
    return (
      <View style={Styles.wrapper}>
        <View
          style={[
            Styles.fixed,
            {
              transform: [
                {
                  translateX: state.width / 2,
                },
                {
                  translateY: -state.height / 2,
                },
              ],
            },
          ]}
          onLayout={onLayout}
        >
          {BadgeJSX}
        </View>
        <View>{children}</View>
      </View>
    );
  }

  return BadgeJSX;
};

export default memo<typeof Badge>(Badge);
