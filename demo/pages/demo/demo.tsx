import React from 'react';
import { View, Text, ScrollView } from 'react-native';

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

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoNavBar');
            }}
          >
            NavBar
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoLoading');
            }}
          >
            Loading
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoOverlay');
            }}
          >
            Overlay
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoButton');
            }}
          >
            Button
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />
      </ScrollView>
    </Layout.Page>
  );
};

export default Demo;
