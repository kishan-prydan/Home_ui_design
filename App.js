import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import colors from './src/assets/theme/colors';
import Routes from './src/navigation/Routes';
import FlashMessage from 'react-native-flash-message';
import {getUserData} from './src/utils/utils';
import {saveUserData} from './src/redux/actions/auth';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
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
