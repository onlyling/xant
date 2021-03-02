import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Switch from 'xant/switch';

import CStyles from './style';

const SwitchView: React.FC = () => {
  const [state, setState] = useState(true);

  return (
    <Layout.Page title="Switch">
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>基础用法</Text>
          </View>

          <Switch
            value={state}
            onChange={(p) => {
              console.log(p);
              setState(p);
            }}
            onPress={() => {
              console.log('基础用法');
            }}
          />

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>自定义大小</Text>
          </View>

          <Switch
            value={state}
            onChange={setState}
            size={50}
            onPress={() => {
              console.log('自定义大小');
            }}
          />

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>自定义颜色</Text>
          </View>

          <Switch
            value={state}
            onChange={setState}
            activeColor="#f30"
            inactiveColor="#ddd"
            onPress={() => {
              console.log('自定义颜色');
            }}
          />

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default SwitchView;
