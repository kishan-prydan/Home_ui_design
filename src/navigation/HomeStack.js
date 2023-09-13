import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HOME,
  ADDHOME,
  HOMEVIEW,
  SWEETHOME,
  APPDRAWERNAVIGATION,
  SPLASH,
  REGISTER,
  LOGIN,
  BOTTOMTABNAVIGATOR,
} from '../constants/routeNames';
import {
  AddHome,
  Home,
  HomeView,
  Light,
  Login,
  Register,
  SplashScreen,
  SweetHome,
} from '../screens';
import AppDrawerNavigation from './AppDrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabNavigator from './BottomTabNavigator';

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
      </>
      {/* ) : ( */}
      <>
        <Stack.Screen
          name={SPLASH}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
            name={REGISTER}
            component={Register}
            options={{headerShown: false}}
          /> */}
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
