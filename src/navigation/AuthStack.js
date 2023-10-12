import React from 'react';
import {LOADING, LOGIN } from '../constants/routeNames';
import { Login, Loading} from '../screens';

export default function AuthStack(Stack) {
  return (
    <>
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
    </>
  );
}
