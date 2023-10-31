//import liraries
import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import ButtonWithLoader from '../../component/common/ButtonWithLoader';
import actions from '../../redux/actions';
import {showError, showSuccess} from '../../utils/helperFunction';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import TextComponent from '../../component/common/TextComponent';
import moment from 'moment';
import styles from './styles';
import DataSync from '../../Database/SyncComponent/DataSync';

const LogOutSetting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncLoading, setIsSyncLoading] = useState(false);
  const [deviceName, setDeviceName] = useState(null);

  const currentDate = moment().format('DD-MM-YYYY');
  // const currentDate = '15-10-2023';

  let model = DeviceInfo.getModel();

  //log out code here
  const onLogOutPress = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [{text: 'No'}, {text: 'Yes', onPress: logout}],
      {cancelable: true},
    );
  };

  //log out api calling from action (redux)
  const logout = () => {
    setIsLoading(true);
    setTimeout(() => {
      actions.logout();
      setIsLoading(false);
      showSuccess('Logged out successfully');
    }, 2000);
  };

  useEffect(() => {
    //getting device imformation
    async function fetchDeviceData() {
      try {
        const name = await DeviceInfo.getDeviceName();

        setDeviceName(name);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchDeviceData();
  }, []);

  //sync function calling here
  const onSyncPress = () => {
    Alert.alert(
      'Sync Data',
      `Do you want to sync ${currentDate} data?`,
      [{text: 'No'}, {text: 'Yes', onPress: syncOnPress}],
      {cancelable: true},
    );
  };

  //sync function to sync data from server
  const syncOnPress = () => {
    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        setIsSyncLoading(true);
        setTimeout(() => {
          DataSync.syncData(currentDate, setIsLoading);
          showSuccess('Sync completed')
          setIsSyncLoading(false);
        }, 4000);
      } else {
        showError('Internet is not available');
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.deviceView}>
        <TextComponent title={'Device OS: '} />
        <TextComponent
          title={DeviceInfo.getSystemName()}
          textStyle={styles.deviceViewTextStyle}
        />
      </View>
      <View style={styles.deviceView}>
        <TextComponent title={'Device Name: '} />
        <TextComponent
          title={deviceName}
          textStyle={styles.deviceViewTextStyle}
        />
      </View>
      <View style={styles.deviceView}>
        <TextComponent title={'Model No: '} />
        <TextComponent title={model} textStyle={styles.deviceViewTextStyle} />
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
      {/* <ButtonWithLoader
        title={'table name'}
        buttonStyle={styles.syncButtonStyle}
        titleStyle={styles.textStyle}
        isLoading={isSyncLoading}
        onPress={() => getTableNames()}
      /> */}
    </View>
  );
};

export default LogOutSetting;
