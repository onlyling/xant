import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@/pages/bottom-tab/home/home';
import UserCenter from '@/pages/bottom-tab/user-center/user-center';

export type BottomTabParamList = {
  Home: undefined;
  UserCenter: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          title: '首页',
          // tabBarIcon: ({ color, size }) => {
          //   return <Icon name="home" size={size} color={color} />;
          // },
        }}
        component={Home}
      />
      <Tab.Screen
        name="UserCenter"
        options={{
          title: '我的',
          // tabBarIcon: ({ color, size }) => {
          //   return <Icon name="user" size={size} color={color} />;
          // },
        }}
        component={UserCenter}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
