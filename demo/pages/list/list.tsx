import React from 'react';
import { View, Text } from 'react-native';

import Layout from '@/layouts/layout';
import type * as Routes from '@/routes';

type ListProps = {} & Routes.RootStackScreenProps<'List'>;

const List: React.FC<ListProps> = ({ navigation }) => {
  return (
    <Layout.Page
      title="List"
      barStyle="light-content"
      headerBackgroundColor="#f30"
      headerPorps={{
        rightText: '1234',
      }}
    >
      <View>
        <Text>List</Text>
      </View>

      <View>
        <Text
          onPress={() => {
            navigation.push('Details', {
              id: 1111,
            });
          }}
        >
          Details
        </Text>
      </View>
    </Layout.Page>
  );
};

export default List;
