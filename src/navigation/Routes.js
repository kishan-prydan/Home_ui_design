import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import data from '../../data';

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

export default function Routes() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   useEffect(() => {
  //     const fetchLoginData = async () => {
  //       const loginData = await getLoginData();
  //       if (loginData) {
  //         setIsLoggedIn(true);
  //       }
  //     };

  //     fetchLoginData();
  //   }, []);

  return (
    <NavigationContainer>
      {/* {isLoggedIn ? ( <HomeStack /> ) : ( <AuthStack /> )} */}
      <HomeStack />
    </NavigationContainer>
  );
}
