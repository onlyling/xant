import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Loading from 'xant/loading';

import CStyles from './style';

const PortalView: React.FC = () => {
  return (
    <Layout.Page title="Portal">
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>加载类型</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Loading />
            <Loading type="spinner" />
          </View>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>自定义颜色</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Loading color="#f30" />
            <Loading color="#690" type="spinner" />
          </View>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>自定义大小</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Loading size={18} />
            <Loading size={18} type="spinner" />
          </View>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>加载文案</Text>
          </View>

          <View>
            <Loading>加载文案...</Loading>
          </View>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>垂直排列</Text>
          </View>

          <View>
            <Loading vertical>加载文案...</Loading>
          </View>

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default PortalView;