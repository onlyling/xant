import React, { useMemo, useCallback, memo } from 'react';
import type { TextStyle } from 'react-native';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NavBar from 'components/nav-bar';
import { Theme } from 'components/theme';

import type { PageProps } from './interface';
import { createStyles } from './style';
import FocusAwareStatusBar from '../focus-aware-status-bar';

/**
 * 页面盒子
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

    const Styles = createStyles(themeVar, { primaryColor });
    const testStyle = useMemo<TextStyle>(
      () => ({
        color: textColor,
      }),
      [textColor],
    );
    /**
     * 点击返回
     */
    const onPressLeftArrow = useCallback(() => {
      if (onPressBack) {
        onPressBack();
      } else {
        navigation.goBack();
      }
    }, [navigation, onPressBack]);

    const pageStyles = [Styles.page, style];

    return (
      <>
        <FocusAwareStatusBar barStyle={barStyle} {...statusBarProps} />

        {primaryColor !== 'transparent' ? (
          <View style={Styles.barStyle} />
        ) : null}

        <View style={pageStyles}>
          {showHeader ? (
            <NavBar
              wrapperStyle={{
                backgroundColor: primaryColor,
              }}
              leftArrowStyle={testStyle}
              titleTextStyle={testStyle}
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
