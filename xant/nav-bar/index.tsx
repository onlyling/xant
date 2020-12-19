import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Theme, StyleVarType } from '../theme';

export type NavBarProps = {
  /** 最外层的样式 */
  wrapperStyle?: ViewStyle;

  leftArrowStyle?: TextStyle;

  titleTextStyle?: TextStyle;

  /** 标题 */
  title?: string | React.ReactNode;

  /** 左侧文字 */
  leftText?: string | React.ReactNode;

  /** 右侧文字 */
  rightText?: string | React.ReactNode;

  /** 显示左箭头 */
  leftArrow?: boolean;

  /** 是否显示下边框 */
  border?: boolean;

  onPressLeftArrow?: () => void;

  onPressLeftText?: () => void;
};

const createStyles = (themeVar: StyleVarType) => {
  return StyleSheet.create({
    wrapper: {
      height: themeVar.nav_bar_height,
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: themeVar.background_color,
      paddingHorizontal: themeVar.padding_md,
    },

    titleText: {
      color: themeVar.nav_bar_title_text_color,
      textAlign: 'center',
      fontSize: themeVar.nav_bar_title_font_size,
    },

    leftWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
    },

    leftText: {
      color: themeVar.nav_bar_icon_color,
      fontSize: 14,
    },

    leftArrow: {
      color: themeVar.nav_bar_icon_color,
      marginRight: themeVar.padding_md,
      lineHeight: themeVar.nav_bar_height,
      paddingRight: 2,
      // backgroundColor: '#000',
    },

    rithtWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
    },
  });
};

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

  const leftWrapperStyles = [
    Styles.leftWrapper,
    {
      left: themeVar.padding_md,
    },
  ];
  const leftArrowStyles = [Styles.leftArrow, leftArrowStyle];
  const titleTextStyles = [Styles.titleText, titleTextStyle];
  const rightWrapperStyles = [
    Styles.rithtWrapper,
    {
      right: themeVar.padding_md,
    },
  ];

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

export default NavBar;
