import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigation from './AppNavigation';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {AppNavigation(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
