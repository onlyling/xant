import React from 'react';
import type { ViewStyle } from 'react-native';

import DeomHome from '@/pages/demo/demo';
import DemoWrapper from './demo-wrapper';

import DeomNavBar from '../../components/nav-bar/demo/basic';

export type DemoPaths = 'DemoHome' | 'DemoNavBar';

const pageStyle: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
};

export const demoConfigs: { path: DemoPaths; page: any }[] = [
  {
    path: 'DemoHome',
    page: DeomHome,
  },
  {
    path: 'DemoNavBar',
    page: () => (
      <DemoWrapper>
        <DeomNavBar />
      </DemoWrapper>
    ),
  },
];
