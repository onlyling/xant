import React, { useLayoutEffect, memo } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { NavBar, useTheme } from 'xant';

import type { PageProps } from './interface';
import FocusAwareStatusBar from '../focus-aware-status-bar';

/**
 * 页面盒子
 */
const Page: React.FC<PageProps> = memo(
  ({ children, statusBarProps, barStyle = 'dark-content', headerShown = true, headerBackgroundColor, title, statusBarShown = true, headerTintColor = '#11151A' }) => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    useLayoutEffect(() => {
      const options: Record<string, any> = {
        headerStyle: {
          backgroundColor: headerBackgroundColor,
        },
        headerTintColor,
        title,
        headerShown,
      };

      navigation.setOptions(options);
    }, [navigation, headerShown, headerBackgroundColor, title, headerTintColor]);

    return (
      <>
        <FocusAwareStatusBar barStyle={barStyle} {...statusBarProps} />
        {!headerShown && statusBarShown ? <View style={{ height: insets.top, backgroundColor: headerBackgroundColor }} /> : null}
        {children}
      </>
    );
  },
);

export default Page;
