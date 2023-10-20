//import liraries
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import colors from '../../assets/theme/colors';
import ButtonWithLoader from '../../component/common/ButtonWithLoader';
import actions from '../../redux/actions';
import {showSuccess} from '../../utils/helperFunction';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import TextComponent from '../../component/common/TextComponent';

const LogOutSetting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [deviceIP, setDeviceIP] = useState(null);
  const [deviceName, setDeviceName] = useState(null);

  const deviceInfoData = [
    { label: 'Device ID', value: DeviceInfo.getUniqueId() },
    { label: 'Device Model', value: DeviceInfo.getModel() },
    { label: 'Device Manufacturer', value: DeviceInfo.getManufacturer() },
    { label: 'Device OS', value: DeviceInfo.getSystemName() },
    { label: 'OS Version', value: DeviceInfo.getSystemVersion() },
    // Add more device information as needed
  ];

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
