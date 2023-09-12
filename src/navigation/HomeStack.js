import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HOME,
  ADDHOME,
  HOMEVIEW,
  SWEETHOME,
  APPDRAWERNAVIGATION,
} from '../constants/routeNames';
import {AddHome, Home, HomeView, SweetHome} from '../screens';
import AppDrawerNavigation from './AppDrawerNavigation';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={HOMEVIEW}
        component={HomeView}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ADDHOME} component={AddHome} />
      <Stack.Screen
        name={SWEETHOME}
        component={SweetHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={APPDRAWERNAVIGATION}
        component={AppDrawerNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
