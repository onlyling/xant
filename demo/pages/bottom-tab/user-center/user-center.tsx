import React from 'react';
import { View, Text, Image } from 'react-native';

import Layout from '@/layouts/layout';
import type * as Routes from '@/routes';

type UserCenterProps = {} & Routes.BottomTabScreenProps<'UserCenter'>;

const UserCenter: React.FC<UserCenterProps> = ({ navigation }) => {
  return (
    <Layout.FullPage statusBarStyle="light-content">
      <Image source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }} style={{ width: '100%', height: 200 }} />

      <View>
        <Text>UserCenter</Text>
      </View>

      <View>
        <Text
          onPress={() => {
            navigation.push('Details', {
              id: 3333,
            });
          }}
        >
          Go Details
        </Text>
      </View>
    </Layout.FullPage>
  );
};

export default UserCenter;
