import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import MainNavigator from './src/navigation';
import 'react-native-gesture-handler';
import colors from './src/assets/theme/colors';

const App = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.header} />
      <SafeAreaView style={styles.container}>
        <MainNavigator />
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
