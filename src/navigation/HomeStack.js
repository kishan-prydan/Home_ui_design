import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HOME,
  ADDHOME,
  HOMEVIEW,
  SWEETHOME,
  APPDRAWERNAVIGATION,
  SPLASH,
  LOGIN,
  BOTTOMTABNAVIGATOR,
  RGBW,
  SECONDBOTTOMTABNAVIGATOR,
  LIGHTSETTING,
} from '../constants/routeNames';
import {
  AddHome,
  Home,
  HomeView,
  LightSetting,
  Login,
  Rgbw,
  SplashScreen,
  SweetHome,
} from '../screens';
import AppDrawerNavigation from './AppDrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabNavigator from './BottomTabNavigator';
import SecondBottomTabNavigator from './SecondBottomTabNavigator';

const Stack = createStackNavigator();

// const getLoginData = async () => {
//   try {
//     const storedData = await AsyncStorage.getItem('loginData');
//     if (storedData !== null) {
//       const loginData = JSON.parse(storedData);
//       return loginData;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error('Error retrieving login data: ', error);
//     return null;
//   }
// };

export default function HomeStack() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const fetchLoginData = async () => {
  //     const loginData = await getLoginData();
  //     if (loginData) {
  //       setIsLoggedIn(true);
  //     }
  //   };

  //   fetchLoginData();

  // async function checkAuthentication() {
  //   const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
  //   if (isLoggedIn) {
  //     setIsLoggedIn(true);
  //   }
  // }

  // checkAuthentication();
  // }, []);
  return (
    <Stack.Navigator initialRouteName={SPLASH}>
      {/* {isLoggedIn ? ( */}
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
        <Stack.Screen 
          name={BOTTOMTABNAVIGATOR}
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name={SECONDBOTTOMTABNAVIGATOR}
          component={SecondBottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name={LIGHTSETTING}
          component={LightSetting}
          options={{headerShown: false}}
        />
      </>
      {/* ) : ( */}
      <>
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
      </>
      {/* )} */}
    </Stack.Navigator>
  );
}
