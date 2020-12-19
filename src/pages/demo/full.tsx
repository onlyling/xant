import React from 'react';
import { View, Text } from 'react-native';

import Layout from '@~/layouts/layout';
import * as Routes from '@~/routes';

type DemoFullProps = {} & Routes.RootStackScreenProps<'DemoFull'>;

const DemoFull: React.FC<DemoFullProps> = () => {
  return (
    <Layout.FullPage
      filled={false}
      statusBarStyle="light-content"
      statusBarBackgroundColor="#963"
    >
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
