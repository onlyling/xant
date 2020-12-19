import React from 'react';
import { View, StatusBar, StyleSheet, StatusBarProps } from 'react-native';

import Page from './page';

type FullPageProps = {
  filled?: boolean;
  statusBarBackgroundColor?: string;
  statusBarStyle?: StatusBarProps['barStyle'];
};

const Styles = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight,
  },
});

const FullPage: React.FC<FullPageProps> = ({
  children,
  filled = true,
  statusBarBackgroundColor,
  statusBarStyle = 'dark-content',
}) => {
  return (
    <Page
      showHeader={false}
      statusBarProps={{
        backgroundColor: 'transparent',
        barStyle: statusBarStyle,
        translucent: true,
      }}
    >
      {!filled ? (
        <View
          style={[
            Styles.statusBar,
            {
              backgroundColor: statusBarBackgroundColor,
            },
          ]}
        />
      ) : null}
      {children}
    </Page>
  );
};

export default FullPage;
