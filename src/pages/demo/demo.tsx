import React from 'react';
import { View, Text } from 'react-native';

import Layout from '@~/layouts/layout';
import * as Routes from '@~/routes';

import CStyles from './style';

type DemoProps = {} & Routes.RootStackScreenProps<'Demo'>;

const Demo: React.FC<DemoProps> = ({ navigation }) => {
  return (
    <Layout.Page title="DEMO 组件">
      <View>
        <Text>Demo</Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoFull');
          }}
        >
          Go full
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoButton');
          }}
        >
          Go button
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoImage');
          }}
        >
          Go image
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoCell');
          }}
        >
          Go cell
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoDivider');
          }}
        >
          Go divider
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoTag');
          }}
        >
          Go tag
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoGrid');
          }}
        >
          Go grid
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoPortal');
          }}
        >
          Go portal
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoOverlay');
          }}
        >
          Go overlay
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoPopup');
          }}
        >
          Go popup
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />

      <View>
        <Text
          onPress={() => {
            navigation.push('DemoLoading');
          }}
        >
          Go loading
        </Text>
      </View>

      <View style={CStyles.ctxSplit} />
    </Layout.Page>
  );
};

export default Demo;
