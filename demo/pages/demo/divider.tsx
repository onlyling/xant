import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Divider from '_components/divider';

import CStyles from './style';

const DividerView: React.FC = () => {
  return (
    <Layout.Page title="Divider">
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>基础用法</Text>
          </View>

          <Divider />

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>展示文本</Text>
          </View>

          <Divider>文字</Divider>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>内容位置</Text>
          </View>

          <Divider contentPosition="left">文字</Divider>

          <Divider contentPosition="right">文字</Divider>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>虚线</Text>
          </View>

          <Divider dashed>文字</Divider>

          <View style={CStyles.ctxSplit} />

          <View>
            <Text>自定义样式</Text>
          </View>

          <Divider
            textStyle={{ color: '#690' }}
            borderStyle={{ borderColor: '#666' }}
            wrapperStyle={{ backgroundColor: '#999' }}
          >
            文字
          </Divider>

          <View style={CStyles.ctxSplit} />
        </View>
      </ScrollView>
    </Layout.Page>
  );
};

export default DividerView;
