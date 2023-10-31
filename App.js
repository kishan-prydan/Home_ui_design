import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import colors from './src/assets/theme/colors';
import Routes from './src/navigation/Routes';
import FlashMessage from 'react-native-flash-message';
import {getUserData} from './src/utils/utils';
import {saveUserData} from './src/redux/actions/auth';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
import SyncingScreen from './src/Database/SyncComponent';

const App = () => {
  const [syncing, setSyncing] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  const userDataFetch = async () => {
    const userData = await getUserData();

    // console.log('user data in app js---------------', userData);

    if (!!userData) {
      saveUserData(userData);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    userDataFetch();

    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Remote debugger']);
  }, []);

  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     getUserData()
  //       .then(userData => {
  //         setIsConnected(state.isConnected);
  //         if (!!isConnected && userData && userData.AccessToken) {
  //           setSyncing(true);
  //           fetchData().then(() => {
  //             setSyncing(false);
  //           });
  //         }
  //       })
  //       .catch(error => {
  //         console.error('Error fetching user data:', error);
  //       });
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [isConnected]);

  // const fetchData = async () => {
  //   await new Promise(resolve => setTimeout(resolve, 4000));
  // };

  // if (syncing) {
  //   return <SyncingScreen />;
  // }

  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.header} />
      <SafeAreaView style={styles.container}>
        <Routes />
        <FlashMessage position="top" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
