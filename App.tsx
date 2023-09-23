import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import colors from './src/assets/theme/colors';
import Routes from './src/navigation/Routes';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.header} />
      <SafeAreaView style={styles.container}>
        <Routes />
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
