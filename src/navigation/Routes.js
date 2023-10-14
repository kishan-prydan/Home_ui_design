import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export default function Routes() {
  const userData = useSelector(state => state.auth.userData);
  // console.log(userData);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!userData && userData?.AccessToken ? HomeStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
