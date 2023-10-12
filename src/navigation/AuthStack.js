import React from 'react';
import {FORGOTPASSWORD, LOADING, LOGIN, OTPSCREEN } from '../constants/routeNames';
import { Login, Loading, ForgotPassword, OtpScreen} from '../screens';

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
      <Stack.Screen 
        name={FORGOTPASSWORD}
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name={OTPSCREEN}
        component={OtpScreen}
        options={{headerShown: false}}
      />
    </>
  );
}
