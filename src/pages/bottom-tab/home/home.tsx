import React from 'react';
import { View, Text } from 'react-native';

import Layout from '@~/layouts/layout';
import type * as Routes from '@~/routes';

type HomeProps = {} & Routes.BottomTabScreenProps<'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <Layout.Page showHeader={false}>
      <View>
        <Text>Home</Text>
      </View>

      <View>
        <Text
          onPress={() => {
            navigation.push('List');
          }}
        >
          Go List
        </Text>
      </View>

      <View>
        <Text
          onPress={() => {
            navigation.push('Demo');
          }}
        >
          Go Demo
        </Text>
      </View>
    </Layout.Page>
  );
};

export default Home;
