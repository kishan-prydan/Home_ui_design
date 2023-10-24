import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import moment from 'moment';
import NetInfo from '@react-native-community/netinfo';
import {apiGet} from '../utils/utils';
import {SINC_GET_AREA} from '../config/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createTables,
  deleteAllData,
  fetchAllData,
  insertData,
  updateOrInsertData,
} from './Schema/AreaDetails';
import colors from '../assets/theme/colors';
import TextComponent from '../component/common/TextComponent';

const SyncingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const initialDate = '01-01-1970';
  const currentDate = moment().format('DD-MM-YYYY');

  useEffect(() => {
    createTables();

    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        const isFirstTime = await AsyncStorage.getItem('isFirstTime');

        // console.log('is app opened first time: ---1----', isFirstTime);

        if (isFirstTime === null) {
          await AsyncStorage.setItem('isFirstTime', 'false');
          // console.log('is app opened first time: ---2----', isFirstTime);

          setTimeout(() => {
            fetchDataFromApi(initialDate);
            // console.log('data is coming from initial date', initialDate);
          }, 3000);
        } else {
          setTimeout(() => {
            fetchDataFromApi(currentDate);
            // console.log('data is coming from current date', currentDate);
          }, 3000);
        }
      } else {
        console.log(
          'No internet connection. Logging data from the local database.',
        );
        fetchAllData();
        setIsLoading(false);
      }
    });
  }, []);

  const fetchDataFromApi = async date => {
    // console.log('date =================', date);
    try {
      const res = await apiGet(`${SINC_GET_AREA}/${date}`);
      const apiData = res.data;

      const existingData = await fetchAllData();

      for (const item of apiData) {
        const existingItem = existingData.find(
          dataItem => dataItem._id === item._id,
        );
        if (
          !existingItem ||
          JSON.stringify(existingItem) !== JSON.stringify(item)
        ) {
          updateOrInsertData([item]);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching data from the API:', error);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.mainViewStyle}>
          <ActivityIndicator size={50} color="#ffffff" />
          <TextComponent
            title={'Syncing...'}
            textStyle={styles.textStyle}
            wrapper={styles.textContainer}
          />
          <TextComponent
            title={'Please Wait...'}
            textStyle={styles.textStyle}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
  },
  mainViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingVertical: 5,
  },
  textStyle: {
    color: colors.white,
  },
});

export default SyncingScreen;
