import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOADING, LOGIN, SPLASH} from '../constants/routeNames';
import {SplashScreen, Login, Loading,} from '../screens';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={SPLASH}>
      <Stack.Screen
        name={SPLASH}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={LOADING}
        component={Loading}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
