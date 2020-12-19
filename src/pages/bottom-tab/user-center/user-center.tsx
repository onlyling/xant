import React from 'react';
import { View, Text } from 'react-native';

import FocusAwareStatusBar from '@~/layouts/focus-aware-status-bar';
import * as Routes from '@~/routes';

type UserCenterProps = {} & Routes.BottomTabScreenProps<'UserCenter'>;

const UserCenter: React.FC<UserCenterProps> = ({ navigation }) => {
  return (
    <View>
      <FocusAwareStatusBar backgroundColor="#f99" />

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
    </View>
  );
};

export default UserCenter;
