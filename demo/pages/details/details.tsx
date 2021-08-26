import React from 'react';
import { View, Text } from 'react-native';

import Layout from '@/layouts/layout';
import type * as Routes from '@/routes';

type DetailsProps = {} & Routes.RootStackScreenProps<'Details'>;

const Details: React.FC<DetailsProps> = ({ route }) => {
  return (
    <Layout.Page title="Details 嘿嘿嘿" headerBackgroundColor="#fff" barStyle="dark-content" headerTintColor="#690">
      <View style={{ backgroundColor: '#fff' }}>
        <Text>Details</Text>
        <View>
          <Text>{route.params.id}</Text>
        </View>
      </View>
    </Layout.Page>
  );
};

export default Details;
