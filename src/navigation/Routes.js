
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import SyncingScreen from '../Database/SyncComponent';

const Stack = createStackNavigator();

export default function Routes() {
  const userData = useSelector(state => state.auth.userData);

  const [syncing, setSyncing] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    if (!!isConnected && userData && userData?.AccessToken) {
      setSyncing(true);

      fetchData().then(() => {
        setSyncing(false);
      });
    }

    return () => {
      unsubscribe();
    };
  }, [userData, isConnected]);

  const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 4000));
  };

  if (syncing) {
    return (
      <NavigationContainer>
        <SyncingScreen />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData && userData?.AccessToken
          ? HomeStack(Stack)
          : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
