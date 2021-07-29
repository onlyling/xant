import React from 'react';
import { ScrollView } from 'react-native';

import { Cell, CellGroup } from 'xant';
import Layout from '@/layouts/layout';
import type * as Routes from '@/routes';

import FontSize from './font-size';

type DemoProps = {} & Routes.RootStackScreenProps<'DemoHome'>;

const navDatas: {
  title: string;
  datas: {
    title: string;
    name: keyof Routes.RootStackParamList;
  }[];
}[] = [
  {
    title: '案例',
    datas: [
      {
        title: 'FullPage',
        name: 'DemoFull',
      },
    ],
  },
  {
    title: '基础组件',
    datas: [
      {
        title: 'Button',
        name: 'DemoButton',
      },
      {
        title: 'Cell',
        name: 'DemoCell',
      },
      {
        title: 'Image',
        name: 'DemoImage',
      },
      {
        title: 'Grid',
        name: 'DemoGrid',
      },
      {
        title: 'Popup',
        name: 'DemoPopup',
      },
      {
        title: 'Toast',
        name: 'DemoToast',
      },
      {
        title: 'TextInput',
        name: 'DemoTextInput',
      },
    ],
  },
  {
    title: '表单组件',
    datas: [
      {
        title: 'Checkbox',
        name: 'DemoCheckbox',
      },
      {
        title: 'Switch',
        name: 'DemoSwitch',
      },
      {
        title: 'Field',
        name: 'DemoField',
      },
    ],
  },
  {
    title: '反馈组件',
    datas: [
      {
        title: 'ActionSheet',
        name: 'DemoActionSheet',
      },
      {
        title: 'Dialog',
        name: 'DemoDialog',
      },
      {
        title: 'Dropdown',
        name: 'DemoDropdown',
      },
      {
        title: 'Loading',
        name: 'DemoLoading',
      },
      {
        title: 'Notify',
        name: 'DemoNotify',
      },
      {
        title: 'Overlay',
        name: 'DemoOverlay',
      },
    ],
  },
  {
    title: '展示组件',
    datas: [
      {
        title: 'Badge',
        name: 'DemoBadge',
      },
      {
        title: 'Divider',
        name: 'DemoDivider',
      },
      {
        title: 'Tag',
        name: 'DemoTag',
      },
    ],
  },
  {
    title: '导航组件',
    datas: [
      {
        title: 'NavBar',
        name: 'DemoNavBar',
      },
      {
        title: 'ActionBar',
        name: 'DemoActionBar',
      },
    ],
  },
];

const Demo: React.FC<DemoProps> = ({ navigation }) => {
  return (
    <Layout.Page title="DEMO 组件">
      <ScrollView>
        <CellGroup title="文案粗细">
          <FontSize />
        </CellGroup>

        {navDatas.map((item) => {
          return (
            <CellGroup key={item.title} title={item.title}>
              {item.datas.map((subitem, index) => {
                return (
                  <Cell
                    key={subitem.name}
                    isLink
                    title={subitem.title}
                    onPress={() => {
                      navigation.navigate(subitem.name);
                    }}
                    border={index + 1 !== item.datas.length}
                  />
                );
              })}
            </CellGroup>
          );
        })}
      </ScrollView>
    </Layout.Page>
  );
};

export default Demo;
