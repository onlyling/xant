import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import * as Routes from '@~/routes';

import FontSize from './font-size';
import CStyles from './style';

type DemoProps = {} & Routes.RootStackScreenProps<'Demo'>;

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

        <View>
          <Text
            onPress={() => {
              navigation.push('DemoToast');
            }}
          >
            Go toast
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.push('DemoBadge');
            }}
          >
            Go badge
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.push('DemoActionBar');
            }}
          >
            Go action-bar
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.push('DemoDialog');
            }}
          >
            Go dialog
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.push('DemoNotify');
            }}
          >
            Go notify
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.push('DemoActionSheet');
            }}
          >
            Go action-sheet
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.push('DemoSwitch');
            }}
          >
            Go switch
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />
      </ScrollView>
    </Layout.Page>
  );
};

export default Demo;
