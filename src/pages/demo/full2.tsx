import React from 'react';
import { View, Text } from 'react-native';

import Layout from '@~/layouts/layout';
import * as Routes from '@~/routes';

type DemoFullProps = {} & Routes.RootStackScreenProps<'DemoFull2'>;

const DemoFull: React.FC<DemoFullProps> = () => {
  return (
    <Layout.FullPage>
      <View>
        <Text>DemoFull1222222</Text>
      </View>

      <View>
        <Text>DemoFull222222222</Text>
      </View>

      <View>
        <Text>DemoFull3222222222</Text>
      </View>
    </Layout.FullPage>
  );
};

export default DemoFull;
