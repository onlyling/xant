import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Layout from '@~/layouts/layout';
import Loading from 'components/loading';
import Circular from 'components/loading/circular';
import Spinner from 'components/loading/spinner';

import CStyles from './style';

const LoadingView: React.FC = () => {
  return (
    <Layout.Page title="Loading">
      <ScrollView>
        <View style={CStyles.padding}>
          <View>
            <Text>单独使用图标</Text>
          </View>

          <View style={CStyles.ctxSplit} />

          <View>
            <Circular />

            <Spinner />
          </View>

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

export default LoadingView;
