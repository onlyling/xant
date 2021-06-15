import React from 'react';
import type { ViewStyle } from 'react-native';
// import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DemoHome from '@/pages/demo/demo';
import DemoFull from '@/pages/demo/full';
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
import DemoActionSheet from '../../components/action-sheet/demo/basic';
import DemoNotify from '../../components/notify/demo/basic';
import DemoImage from '../../components/image/demo/basic';
import DemoTag from '../../components/tag/demo/basic';
import DemoDivider from '../../components/divider/demo/basic';
import DemoGrid from '../../components/grid/demo/basic';
import DemoSwitch from '../../components/switch/demo/basic';
import DemoDialog from '../../components/dialog/demo/basic';
import DemoTextInput from '../../components/text-input/demo/basic';
import DemoField from '../../components/field/demo/basic';
import DemoDropdown from '../../components/dropdown/demo/basic';

export type DemoPaths =
  | 'DemoHome'
  | 'DemoFull'
  | 'DemoNavBar'
  | 'DemoLoading'
  | 'DemoOverlay'
  | 'DemoButton'
  | 'DemoBadge'
  | 'DemoActionBar'
  | 'DemoPopup'
  | 'DemoCell'
  | 'DemoToast'
  | 'DemoActionSheet'
  | 'DemoNotify'
  | 'DemoImage'
  | 'DemoTag'
  | 'DemoDivider'
  | 'DemoGrid'
  | 'DemoSwitch'
  | 'DemoDialog'
  | 'DemoTextInput'
  | 'DemoField'
  | 'DemoDropdown';

const pageStyle: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
};

export const demoConfigs: { path: DemoPaths; page: any }[] = [
  {
    path: 'DemoHome',
    page: DemoHome,
  },
  {
    path: 'DemoFull',
    page: DemoFull,
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
  {
    path: 'DemoActionSheet',
    page: () => (
      <DemoWrapper>
        <DemoActionSheet />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoNotify',
    page: () => (
      <DemoWrapper>
        <DemoNotify />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoImage',
    page: () => (
      <DemoWrapper style={pageStyle}>
        <DemoImage />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoTag',
    page: () => (
      <DemoWrapper>
        <DemoTag />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDivider',
    page: () => (
      <DemoWrapper>
        <DemoDivider />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoGrid',
    page: () => (
      <DemoWrapper>
        <DemoGrid />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSwitch',
    page: () => (
      <DemoWrapper>
        <DemoSwitch />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDialog',
    page: () => (
      <DemoWrapper>
        <DemoDialog />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoTextInput',
    page: () => (
      <DemoWrapper>
        <DemoTextInput />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoField',
    page: () => (
      <DemoWrapper>
        <KeyboardAwareScrollView>
          <DemoField />
        </KeyboardAwareScrollView>
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDropdown',
    page: () => (
      <DemoWrapper>
        <DemoDropdown />
      </DemoWrapper>
    ),
  },
];
