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
import DemoButtonView from '@~/pages/demo/button';
import DemoImageView from '@~/pages/demo/image';
import DemoCellView from '@~/pages/demo/cell';
import DemoDividerView from '@~/pages/demo/divider';
import DemoTagView from '@~/pages/demo/tag';
import DemoGridView from '@~/pages/demo/grid';
import DemoPortalView from '@~/pages/demo/portal';
import DemoOverlayView from '@~/pages/demo/overlay';
import DemoPopupView from '@~/pages/demo/popup';
import DemoLoadingView from '@~/pages/demo/loading';
import DemoToastView from '@~/pages/demo/toast';
import DemoBadgeView from '@~/pages/demo/badge';
import DemoActionBarView from '@~/pages/demo/action-bar';

import ListView from '@~/pages/list/list';
import DetailsView from '@~/pages/details/details';

import TabsView, { BottomTabParamList } from './bottom-tab';

/** 当前所有 Stack 路由的参数 */
type RootStackParamList = {
  Home: undefined;
  Demo: undefined;
  DemoFull: undefined;
  DemoButton: undefined;
  DemoCell: undefined;
  DemoImage: undefined;
  DemoDivider: undefined;
  DemoTag: undefined;
  DemoGrid: undefined;
  DemoPortal: undefined;
  DemoOverlay: undefined;
  DemoPopup: undefined;
  DemoLoading: undefined;
  DemoToast: undefined;
  DemoBadge: undefined;
  DemoActionBar: undefined;
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
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Stack.Screen name="Home" component={TabsView} />

        <Stack.Screen name="Demo" component={DemoView} />

        <Stack.Screen name="DemoFull" component={DemoFullView} />

        <Stack.Screen name="DemoButton" component={DemoButtonView} />

        <Stack.Screen name="DemoImage" component={DemoImageView} />

        <Stack.Screen name="DemoCell" component={DemoCellView} />

        <Stack.Screen name="DemoDivider" component={DemoDividerView} />

        <Stack.Screen name="DemoTag" component={DemoTagView} />

        <Stack.Screen name="DemoGrid" component={DemoGridView} />

        <Stack.Screen name="DemoPortal" component={DemoPortalView} />

        <Stack.Screen name="DemoOverlay" component={DemoOverlayView} />

        <Stack.Screen name="DemoPopup" component={DemoPopupView} />

        <Stack.Screen name="DemoLoading" component={DemoLoadingView} />

        <Stack.Screen name="DemoToast" component={DemoToastView} />

        <Stack.Screen name="DemoBadge" component={DemoBadgeView} />

        <Stack.Screen name="DemoActionBar" component={DemoActionBarView} />

        <Stack.Screen name="List" component={ListView} />

        <Stack.Screen name="Details" component={DetailsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NestingNavigators;
