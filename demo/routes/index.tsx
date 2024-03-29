import React from 'react';
import type { CompositeNavigationProp } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import type { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import type { BottomTabNavigationProp as BottomTabNavigationPropOriginal } from '@react-navigation/bottom-tabs';

import BackArrow from '@/components/back-arrow';
import ListView from '@/pages/list/list';
import DetailsView from '@/pages/details/details';

import { sceneContainerStyle, buildHeaderTitleStyle } from './config';
import type { BottomTabParamList } from './bottom-tab';
import TabsView from './bottom-tab';
import type { DemoPaths } from './demo-config';
import { demoConfigs } from './demo-config';

/** 当前所有 Stack 路由的参数 */
export type RootStackParamList = {
  Index: undefined;
  List: undefined;
  Details: {
    id: number;
  };
} & Record<DemoPaths, undefined>;

/** Stack 路由的 props */
export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

/** BottomTab 路由的 navigation prop */
export type BottomTabNavigationProp<T extends keyof BottomTabParamList> = CompositeNavigationProp<
  BottomTabNavigationPropOriginal<BottomTabParamList, T>,
  StackNavigationProp<RootStackParamList>
>;

/** BottomTab 路由的 props */
export type BottomTabScreenProps<T extends keyof BottomTabParamList> = {
  navigation: BottomTabNavigationProp<T>;
};

const Stack = createStackNavigator<RootStackParamList>();

const NestingNavigators: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardStyle: sceneContainerStyle,
          headerTitleAlign: 'center',
          headerTitleStyle: buildHeaderTitleStyle(),
          headerBackTitleVisible: false,
          headerLeft: (props) => BackArrow(props),
          // 默认所有页面都应该用 Layout.Page 包裹
          // headerTintColor: '#11151A',
        }}
      >
        <Stack.Screen
          name="Index"
          component={TabsView}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="List" component={ListView} />

        <Stack.Screen name="Details" component={DetailsView} />

        {demoConfigs.map((dc) => (
          <Stack.Screen key={dc.path} name={dc.path} component={dc.page} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NestingNavigators;
