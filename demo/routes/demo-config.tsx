import React from 'react';
import type { ViewStyle } from 'react-native';

import DeomHome from '@/pages/demo/demo';
import DemoWrapper from './demo-wrapper';

import DemoNavBar from '../../components/nav-bar/demo/basic';
import DemoLoading from '../../components/loading/demo/basic';

export type DemoPaths = 'DemoHome' | 'DemoNavBar' | 'DemoLoading';

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
        <DemoNavBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoLoading',
    page: () => (
      <DemoWrapper>
        <DemoLoading />
      </DemoWrapper>
    ),
  },
];