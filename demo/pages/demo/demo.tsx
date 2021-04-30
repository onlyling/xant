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

        {/* <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoFull');
            }}
          >
            Go full
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoButton');
            }}
          >
            Go button
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoImage');
            }}
          >
            Go image
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoCell');
            }}
          >
            Go cell
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoDivider');
            }}
          >
            Go divider
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoTag');
            }}
          >
            Go tag
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoGrid');
            }}
          >
            Go grid
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoPortal');
            }}
          >
            Go portal
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoOverlay');
            }}
          >
            Go overlay
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoPopup');
            }}
          >
            Go popup
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoLoading');
            }}
          >
            Go loading
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoToast');
            }}
          >
            Go toast
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoBadge');
            }}
          >
            Go badge
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoActionBar');
            }}
          >
            Go action-bar
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoDialog');
            }}
          >
            Go dialog
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoNotify');
            }}
          >
            Go notify
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoActionSheet');
            }}
          >
            Go action-sheet
          </Text>
        </View>

        <View style={CStyles.ctxSplit} />

        <View>
          <Text
            onPress={() => {
              navigation.navigate('DemoSwitch');
            }}
          >
            Go switch
          </Text>
        </View>

        <View style={CStyles.ctxSplit} /> */}
      </ScrollView>
    </Layout.Page>
  );
};

export default Demo;
