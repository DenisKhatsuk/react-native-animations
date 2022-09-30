import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  PlainJsScreen,
  AnimatedApiScreen,
  ReanimatedScreen,
  LayoutAnimationsScreen,
} from 'screens';
import { Screens } from './DemoNavigator.types';

import { getScreenOptions } from './DemoNavigator.utils';

const { Navigator, Screen } = createBottomTabNavigator();

export const DemoNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={Screens.PlainJS}
        screenOptions={getScreenOptions}>
        <Screen name={Screens.PlainJS} component={PlainJsScreen} />
        <Screen name={Screens.AnimatedAPI} component={AnimatedApiScreen} />
        <Screen name={Screens.Reanimated} component={ReanimatedScreen} />
        <Screen
          name={Screens.LayoutAnimations}
          component={LayoutAnimationsScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
};
