import React from 'react';
import {
  NavigationContainer,
  CompositeNavigationProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
  StackNavigationProp,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { BottomTabNavigationProp as BottomTabNavigationPropOriginal } from '@react-navigation/bottom-tabs';

import DemoView from '@~/pages/demo/demo';
import DemoFullView from '@~/pages/demo/full';
import DemoFullView2 from '@~/pages/demo/full2';
import DemoButtonView from '@~/pages/demo/button';
import DemoImageView from '@~/pages/demo/image';
import DemoCellView from '@~/pages/demo/cell';

import ListView from '@~/pages/list/list';
import DetailsView from '@~/pages/details/details';

import TabsView, { BottomTabParamList } from './bottom-tab';

/** 当前所有 Stack 路由的参数 */
type RootStackParamList = {
  Home: undefined;
  Demo: undefined;
  DemoFull: undefined;
  DemoFull2: undefined;
  DemoButton: undefined;
  DemoCell: undefined;
  DemoImage: undefined;
  List: undefined;
  Details: {
    id: number;
  };
};

/** Stack 路由的 props */
export type RootStackScreenProps<
  T extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, T>;

/** BottomTab 路由的 navigation prop */
export type BottomTabNavigationProp<
  T extends keyof BottomTabParamList
> = CompositeNavigationProp<
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
        initialRouteName="Home"
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Home" component={TabsView} />

        <Stack.Screen name="Demo" component={DemoView} />

        <Stack.Screen name="DemoFull" component={DemoFullView} />

        <Stack.Screen name="DemoFull2" component={DemoFullView2} />

        <Stack.Screen name="DemoButton" component={DemoButtonView} />

        <Stack.Screen name="DemoImage" component={DemoImageView} />

        <Stack.Screen name="DemoCell" component={DemoCellView} />

        <Stack.Screen name="List" component={ListView} />

        <Stack.Screen name="Details" component={DetailsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NestingNavigators;
