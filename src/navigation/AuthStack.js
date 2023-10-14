import React from 'react';
import routeNames from '../constants/routeNames';
import screens from './../screens/index';

export default function AuthStack(Stack) {
  const navigationOptions = {
    headerShown: false,
  };
  return (
    <>
      <Stack.Screen
        name={routeNames.LOGIN}
        component={screens.Login}
        options={navigationOptions}
      />
      {/* <Stack.Screen
        name={LOADING}
        component={Loading}
        options={navigationOptions}
      /> */}
      <Stack.Screen
        name={routeNames.FORGOTPASSWORD}
        component={screens.ForgotPassword}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.OTPSCREEN}
        component={screens.OtpScreen}
        options={navigationOptions}
      />
    </>
  );
}
