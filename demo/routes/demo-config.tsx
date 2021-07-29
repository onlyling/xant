import React from 'react';
import type { ViewStyle } from 'react-native';
// import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DemoHome from '@/pages/demo/demo';
import DemoFull from '@/pages/demo/full';
import DemoWrapper from './demo-wrapper';

import DemoNavBar from '../../components/nav-bar/__fixtures__/basic';
import DemoLoading from '../../components/loading/__fixtures__/basic';
import DemoOverlay from '../../components/overlay/__fixtures__/basic';
import DemoButton from '../../components/button/__fixtures__/basic';
import DemoBadge from '../../components/badge/__fixtures__/basic';
import DemoActionBar from '../../components/action-bar/__fixtures__/basic';
import DemoPopup from '../../components/popup/__fixtures__/basic';
import DemoCell from '../../components/cell/__fixtures__/basic';
import DemoToast from '../../components/toast/__fixtures__/basic';
import DemoActionSheet from '../../components/action-sheet/__fixtures__/basic';
import DemoNotify from '../../components/notify/__fixtures__/basic';
import DemoImage from '../../components/image/__fixtures__/basic';
import DemoTag from '../../components/tag/__fixtures__/basic';
import DemoDivider from '../../components/divider/__fixtures__/basic';
import DemoGrid from '../../components/grid/__fixtures__/basic';
import DemoSwitch from '../../components/switch/__fixtures__/basic';
import DemoDialog from '../../components/dialog/__fixtures__/basic';
import DemoTextInput from '../../components/text-input/__fixtures__/basic';
import DemoField from '../../components/field/__fixtures__/basic';
import DemoDropdown from '../../components/dropdown/__fixtures__/basic';
import DemoCheckbox from '../../components/checkbox/__fixtures__/basic';

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
  | 'DemoDropdown'
  | 'DemoCheckbox';

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
  {
    path: 'DemoCheckbox',
    page: () => (
      <DemoWrapper>
        <DemoCheckbox />
      </DemoWrapper>
    ),
  },
];
