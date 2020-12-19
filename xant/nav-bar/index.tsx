import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { NavBarProps } from './interface';
import { Theme } from '../theme';

import { createStyles } from './style';

/**
 * NavBar 导航栏
 */
const NavBar: React.FC<NavBarProps> = ({
  wrapperStyle,
  leftArrowStyle,
  titleTextStyle,
  title,
  leftText,
  rightText,
  leftArrow = true,
  onPressLeftArrow,
  onPressLeftText,
}) => {
  const { themeVar } = Theme.useContainer();
  const Styles = createStyles(themeVar);

  const wrapperStyles = [Styles.wrapper, wrapperStyle];
  const leftWrapperStyles = [Styles.leftWrapper];
  const leftArrowStyles = [Styles.leftArrow, leftArrowStyle];
  const titleTextStyles = [Styles.titleText, titleTextStyle];
  const rightWrapperStyles = [Styles.rithtWrapper];

  /** 标题部分 纯文字或自定义 JSX */
  const TitleJSX = title ? (
    React.isValidElement(title) ? (
      title
    ) : (
      <Text style={titleTextStyles}>{title}</Text>
    )
  ) : null;

  /** 左侧文字 纯文字或自定义 JSX */
  const LeftTextJSX = leftText ? (
    React.isValidElement(leftText) ? (
      leftText
    ) : (
      <Text style={Styles.leftText} onPress={onPressLeftText}>
        {leftText}
      </Text>
    )
  ) : null;

  /** 右侧文字 纯文字或自定义 JSX */
  const RightTextJSX = rightText ? (
    React.isValidElement(rightText) ? (
      rightText
    ) : (
      <Text>{rightText}</Text>
    )
  ) : null;

  return (
    <View style={wrapperStyles}>
      <View style={leftWrapperStyles}>
        {leftArrow ? (
          <Text style={leftArrowStyles} onPress={onPressLeftArrow}>
            <Icon name="left" size={themeVar.nav_bar_arrow_size} />
          </Text>
        ) : null}

        {LeftTextJSX}
      </View>

      <View style={rightWrapperStyles}>{RightTextJSX}</View>

      {TitleJSX}
    </View>
  );
};

export default memo(NavBar);
