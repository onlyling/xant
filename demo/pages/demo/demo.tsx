import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Cell } from 'xant';
import Layout from '@/layouts/layout';
import type * as Routes from '@/routes';

import FontSize from './font-size';
import CStyles from './style';

type DemoProps = {} & Routes.RootStackScreenProps<'DemoHome'>;

const Demo: React.FC<DemoProps> = ({ navigation }) => {
  return (
    <Layout.Page title="DEMO 组件">
      <ScrollView>
        <View>
          <Text>Demo</Text>

          <FontSize />
        </View>

        <View style={CStyles.ctxSplit} />

        <Cell
          isLink
          title="NavBar"
          onPress={() => {
            navigation.navigate('DemoNavBar');
          }}
        />

        <Cell
          isLink
          title="Overlay"
          onPress={() => {
            navigation.navigate('DemoOverlay');
          }}
        />

        <Cell
          isLink
          title="Button"
          onPress={() => {
            navigation.navigate('DemoButton');
          }}
        />

        <Cell
          isLink
          title="Badge"
          onPress={() => {
            navigation.navigate('DemoBadge');
          }}
        />

        <Cell
          isLink
          title="ActionBar"
          onPress={() => {
            navigation.navigate('DemoActionBar');
          }}
        />

        <Cell
          isLink
          title="Popup"
          onPress={() => {
            navigation.navigate('DemoPopup');
          }}
        />

        <Cell
          isLink
          title="Cell"
          onPress={() => {
            navigation.navigate('DemoCell');
          }}
        />

        <Cell
          isLink
          title="Toast"
          onPress={() => {
            navigation.navigate('DemoToast');
          }}
        />

        <View style={CStyles.ctxSplit} />
      </ScrollView>
    </Layout.Page>
  );
};

export default Demo;
