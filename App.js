import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import colors from './src/assets/theme/colors';
import Routes from './src/navigation/Routes';
import FlashMessage from 'react-native-flash-message';
import {getUserData} from './src/utils/utils';
import {saveUserData} from './src/redux/actions/auth';
import SplashScreen from './src/screens/SplashScreen';
import SyncingScreen from './src/Database/SyncComponent';

const App = () => {
  const [appReady, setAppReady] = useState(false);

  const userDataFetch = async () => {
    const userData = await getUserData();

    if (!!userData) {
      saveUserData(userData);
    }
  };

  useEffect(() => {
    userDataFetch();

    setTimeout(() => {
      setAppReady(true);
    }, 2000);

    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Remote debugger']);
  }, []);

  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.header} />
      <SafeAreaView style={styles.container}>
        {!!appReady ? <Routes /> : <SplashScreen />}
        {/* <SyncingScreen/> */}
        {/* <FingerprintAuthScreen/> */}
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
