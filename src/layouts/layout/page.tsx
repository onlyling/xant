import React, { memo } from 'react';
import { View, StatusBarProps, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NavBar from 'xant/nav-bar';
import { NavBarProps } from 'xant/nav-bar/interface';
import { Theme } from 'xant/theme';
import FocusAwareStatusBar from '../focus-aware-status-bar';

type PageProps = {
  style?: ViewStyle;

  statusBarProps?: StatusBarProps;

  /**
   * 状态栏文字颜色+页头文字颜色
   *
   * @default `light-content`
   */
  barStyle?: StatusBarProps['barStyle'];

  /**
   * 是否显示页头
   * @default `true`
   */
  showHeader?: boolean;

  /**
   * 页头背景色+状态栏背景色
   */
  headerBackgroundColor?: string;

  /**
   * 页面标题 headerPorps 中的 title，会被后者覆盖
   */
  title?: string;

  /**
   * 点击返回 headerPorps 中的 onPressLeftArrow，会被后者覆盖
   */
  onPressBack?: () => void;

  headerPorps?: NavBarProps;
};

/**
 * 页面盒子
 * @param {Object} props 属性
 */
const Page: React.FC<PageProps> = memo(
  ({
    children,
    style,
    statusBarProps,
    barStyle = 'light-content',
    showHeader = true,
    headerBackgroundColor,
    title,
    onPressBack,
    headerPorps,
  }) => {
    const navigation = useNavigation();
    const { themeVar } = Theme.useContainer();

    /** 主题色 */
    const primaryColor = headerBackgroundColor || themeVar.primary;

    const textColor = barStyle === 'dark-content' ? '#000' : '#fff';

    const pageThemeStyle: ViewStyle = {
      flex: 1,
      backgroundColor: themeVar.background_color,
    };

    const pageStyles = [pageThemeStyle, style];

    /**
     * 点击返回
     */
    const onPressLeftArrow = () => {
      if (onPressBack) {
        onPressBack();
      } else {
        navigation.goBack();
      }
    };

    return (
      <>
        <FocusAwareStatusBar
          barStyle={barStyle}
          backgroundColor={primaryColor}
          {...statusBarProps}
        />

        <View style={pageStyles}>
          {showHeader ? (
            <NavBar
              wrapperStyle={{
                backgroundColor: primaryColor,
              }}
              leftArrowStyle={{
                color: textColor,
              }}
              titleTextStyle={{
                color: textColor,
              }}
              title={title}
              onPressLeftArrow={onPressLeftArrow}
              {...headerPorps}
            />
          ) : null}
          {children}
        </View>
      </>
    );
  },
);

export default Page;
