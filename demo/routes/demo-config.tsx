import React from 'react';
import type { ViewStyle } from 'react-native';

import DeomHome from '@/pages/demo/demo';
import DemoWrapper from './demo-wrapper';

import DemoNavBar from '../../components/nav-bar/demo/basic';
import DemoLoading from '../../components/loading/demo/basic';
import DemoOverlay from '../../components/overlay/demo/basic';
import DemoButton from '../../components/button/demo/basic';
import DemoBadge from '../../components/badge/demo/basic';
import DemoActionBar from '../../components/action-bar/demo/basic';
import DemoPopup from '../../components/popup/demo/basic';
import DemoCell from '../../components/cell/demo/basic';
import DemoToast from '../../components/toast/demo/basic';

export type DemoPaths =
  | 'DemoHome'
  | 'DemoNavBar'
  | 'DemoLoading'
  | 'DemoOverlay'
  | 'DemoButton'
  | 'DemoBadge'
  | 'DemoActionBar'
  | 'DemoPopup'
  | 'DemoCell'
  | 'DemoToast';

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
  {
    path: 'DemoOverlay',
    page: () => (
      <DemoWrapper>
        <DemoOverlay />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoButton',
    page: () => (
      <DemoWrapper>
        <DemoButton />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoBadge',
    page: () => (
      <DemoWrapper>
        <DemoBadge />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoActionBar',
    page: () => (
      <DemoWrapper>
        <DemoActionBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoPopup',
    page: () => (
      <DemoWrapper>
        <DemoPopup />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoCell',
    page: () => (
      <DemoWrapper>
        <DemoCell />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoToast',
    page: () => (
      <DemoWrapper>
        <DemoToast />
      </DemoWrapper>
    ),
  },
];
