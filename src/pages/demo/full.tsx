import React from 'react';
import { View, Text, Image } from 'react-native';

import Layout from '@~/layouts/layout';
import * as Routes from '@~/routes';

type DemoFullProps = {} & Routes.RootStackScreenProps<'DemoFull'>;

const DemoFull: React.FC<DemoFullProps> = () => {
  return (
    <Layout.FullPage statusBarStyle="light-content">
      <Image
        source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
        style={{ width: '100%', height: 100 }}
      />

      <View>
        <Text>DemoFull1</Text>
      </View>

      <View>
        <Text>DemoFull2</Text>
      </View>

      <View>
        <Text>DemoFull3</Text>
      </View>
    </Layout.FullPage>
  );
};

export default DemoFull;
