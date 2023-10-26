import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import moment from 'moment';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAreaTables, fetchAllAreaData} from '../Schema/AreaDetails';
import {createZoneTables, fetchAllZoneData} from '../Schema/ZoneDetails';
import SyncingLoader from '../../component/SyncingLoader';
import AreaDataSync from './AreaDataSync';
import ZoneDataSync from './ZoneDataSync';
import colors from '../../assets/theme/colors';
import { showError } from '../../utils/helperFunction';

const SyncingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const initialDate = '01-01-1970';
  const currentDate = moment().format('DD-MM-YYYY');
  // const currentDate = '25-10-2023';

  useEffect(() => {
    createAreaTables();
    createZoneTables();

    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        const isFirstTime = await AsyncStorage.getItem('isFirstTime');

        if (isFirstTime === null) {
          await AsyncStorage.setItem('isFirstTime', 'false');

          setTimeout(() => {
            AreaDataSync(initialDate, setIsLoading);
            ZoneDataSync(initialDate, setIsLoading);
          }, 3000);
        } else {
          setTimeout(() => {
            AreaDataSync(currentDate, setIsLoading);
            ZoneDataSync(initialDate, setIsLoading);
          }, 3000);
        }
      } else {
        console.log(
          'No internet connection. Logging data from the local database.',
        );
        showError('internet is not available')
        fetchAllAreaData();
        fetchAllZoneData();
        setIsLoading(false);
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
