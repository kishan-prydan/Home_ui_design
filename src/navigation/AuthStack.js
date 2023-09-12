import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME, LOGIN, SPLASH} from '../constants/routeNames';
import {SplashScreen, Login, Home} from '../screens';

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
        name={HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
