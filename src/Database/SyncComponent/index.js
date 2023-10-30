import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import moment from 'moment';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SyncingLoader from '../../component/SyncingLoader';
import colors from '../../assets/theme/colors';
import {showError} from '../../utils/helperFunction';
import DataSync from './DataSync';

const SyncingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const initialDate = '01-01-1970';
  // const currentDate = moment().format('DD-MM-YYYY');
  const currentDate = '25-10-2023';

  useEffect(() => {
    // Initialize database tables
    DataSync.initDatabaseTables();

    //checking internet connectivity
    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        //checking is application opened first time or not
        const isFirstTime = await AsyncStorage.getItem('isFirstTime');

        if (isFirstTime === null) {
          await AsyncStorage.setItem('isFirstTime', 'false');

          setTimeout(() => {
            DataSync.syncData(initialDate, setIsLoading);
          }, 4000);
        } else {
          setTimeout(() => {
            DataSync.syncData(currentDate, setIsLoading);
          }, 4000);
        }
      } else {
        console.log(
          'No internet connection. Logging data from the local database.',
        );
        showError('internet is not available');
        DataSync.loadLocalData(setIsLoading);
      }
    });
  }, []);

  return (
    <View style={styles.container}>{isLoading ? <SyncingLoader /> : null}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
  },
});

export default SyncingScreen;
