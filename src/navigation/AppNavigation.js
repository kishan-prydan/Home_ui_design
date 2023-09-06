import React from 'react';
import {ADDHOME, HOME, HOMEVIEW, SWEETHOME,APPDRAWERNAVIGATION} from '../constants/routeNames';
import Home from '../screens/Home';
import HomeView from '../screens/HomeView';
import AddHome from '../screens/AddHome';
import SweetHome from '../screens/SweetHome';
import AppDrawerNavigation from './AppDrawerNavigation';

const AppNavigation = Stack => {
  return (
    <>
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
    </>
  );
};

export default AppNavigation;
