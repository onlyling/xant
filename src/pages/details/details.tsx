import React from 'react';
import { View, Text } from 'react-native';

import Layout from '@~/layouts/layout';
import * as Routes from '@~/routes';

type DetailsProps = {} & Routes.RootStackScreenProps<'Details'>;

const Details: React.FC<DetailsProps> = ({ route }) => {
  return (
    <Layout.Page
      title="Details"
      headerBackgroundColor="#fff"
      barStyle="dark-content"
    >
      <Text>Details</Text>
      <View>
        <Text>{route.params.id}</Text>
      </View>
    </Layout.Page>
  );
};

export default Details;
