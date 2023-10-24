//import liraries
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import colors from '../../assets/theme/colors';
import ButtonWithLoader from '../../component/common/ButtonWithLoader';
import actions from '../../redux/actions';
import {showInfo, showSuccess} from '../../utils/helperFunction';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import TextComponent from '../../component/common/TextComponent';
import {SINC_GET_AREA} from '../../config/urls';
import {apiGet} from '../../utils/utils';
import {
  fetchAllData,
  updateOrInsertData,
} from '../../Database/Schema/AreaDetails';
import moment from 'moment';

const LogOutSetting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncLoading, setIsSyncLoading] = useState(false);
  const [deviceIP, setDeviceIP] = useState(null);
  const [deviceName, setDeviceName] = useState(null);

  const currentDate = moment().format('DD-MM-YYYY');

  const onLogOutPress = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [{text: 'No'}, {text: 'Yes', onPress: logout}],
      {cancelable: true},
    );
  };

  const logout = () => {
    setIsLoading(true);
    setTimeout(() => {
      actions.logout();
      setIsLoading(false);
      showSuccess('Logged out successfully');
    }, 2000);
  };

  useEffect(() => {
    async function fetchDeviceData() {
      try {
        const state = await NetInfo.fetch();
        const name = await DeviceInfo.getDeviceName();

        if (state.isConnected && state.details.ipAddress) {
          setDeviceIP(state.details.ipAddress);
          setDeviceName(name);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchDeviceData();
  }, []);

  const onSyncPress = () => {
    Alert.alert(
      'Sync Data',
      `Do you want to sync ${currentDate} data?`,
      [{text: 'No'}, {text: 'Yes', onPress: syncOnPress}],
      {cancelable: true},
    );
  };

  const syncOnPress = () => {
    setIsSyncLoading(true);
    setTimeout(async () => {
      try {
        const res = await apiGet(`${SINC_GET_AREA}/${currentDate}`);
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
            showSuccess('Synced successfully');
          }
        }
        setIsSyncLoading(false);
      } catch (error) {
        // console.error('Error fetching data from the API:', error);
        showInfo('No data found');
        setIsSyncLoading(false);
      }
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.deviceView}>
        <TextComponent title={'Device Name: '} />
        <TextComponent
          title={deviceName}
          textStyle={styles.deviceViewTextStyle}
        />
      </View>
      <View style={styles.deviceView}>
        <TextComponent title={'Device IP Address: '} />
        <TextComponent
          title={deviceIP}
          textStyle={styles.deviceViewTextStyle}
        />
      </View>
      <View style={styles.deviceView}>
        <TextComponent title={'Device OS: '} />
        <TextComponent
          title={DeviceInfo.getSystemName()}
          textStyle={styles.deviceViewTextStyle}
        />
      </View>
      <ButtonWithLoader
        title={'Log out'}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.textStyle}
        isLoading={isLoading}
        onPress={onLogOutPress}
      />
      <ButtonWithLoader
        title={'Sync Data'}
        buttonStyle={styles.syncButtonStyle}
        titleStyle={styles.textStyle}
        isLoading={isSyncLoading}
        onPress={() => onSyncPress()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  buttonStyle: {
    width: 100,
    height: 35,
    borderRadius: 5,
    marginTop: 10,
  },
  syncButtonStyle: {
    width: 120,
    height: 38,
    borderRadius: 5,
    marginTop: 20,
  },

  textStyle: {
    fontSize: 12,
    fontWeight: 600,
    color: 'purple',
  },
  deviceView: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  deviceViewTextStyle: {
    color: colors.danger,
    paddingLeft: 10,
  },
});

export default LogOutSetting;
