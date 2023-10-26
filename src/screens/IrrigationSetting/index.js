import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import Container from '../../component/common/Container';
import LightSettingBoxComponent from '../../component/LightSettingBoxComponent';
import TextComponent from '../../component/common/TextComponent';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import colors from '../../assets/theme/colors';
import DropdownComponent from '../../component/common/DropdownComponent';
import CheckBoxComponent from '../../component/common/CheckBoxComponent';
import TimePicketComponent from '../../component/TimePicketComponent';
import routeNames from './../../constants/routeNames';

const IrrigationSetting = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  const data = [
    {label: 'Everyday', value: '1'},
    {label: 'Sunday', value: '2'},
    {label: 'Monday', value: '3'},
    {label: 'Tuesday', value: '4'},
    {label: 'Wednesday', value: '5'},
    {label: 'Thursday', value: '6'},
    {label: 'Friday', value: '7'},
    {label: 'Saturday', value: '8'},
  ];

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [deviceName, setdeviceName] = useState('ir1');
  const [subnetID, setsubnetID] = useState('2');
  const [deviceID, setdeviceID] = useState('2');
  const [ChannelID, setChannelID] = useState('2');

  const handleChangeDeviceName = value => {
    setdeviceName(value);
  };
  const handleChangeSubnetID = value => {
    setsubnetID(value);
  };
  const handleChangeDeviceID = value => {
    setdeviceID(value);
  };
  const handleChangeChannel = value => {
    setChannelID(value);
  };

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconForth
            title={'Irrigation Settings'}
            type={'ioni'}
            name={'arrow-undo'}
            firstType={'entypo'}
            firstName={'home'}
            secondType={'entypo'}
            secondName={'home'}
            thirdType={'entypo'}
            thirdName={'menu'}
            size={24}
            onPressFirst={() => Alert.alert('Drawer button pressed')}
            onPressSecond={() => {
              navigate(routeNames.HOME);
            }}
            textView={{color: colors.primary}}
          />
        </View>
        <Container>
          <View style={styles.boxTitleContainer}>
            <LightSettingBoxComponent
              darkMode
              mainTitle={'Device Name : '}
              value={deviceName}
              editable={true}
              onChangeText={() => handleChangeDeviceName()}
            />
            <LightSettingBoxComponent
              darkMode
              mainTitle={'Subnet ID : '}
              value={subnetID}
              editable={true}
              keyboardType="numeric"
              onChangeText={() => handleChangeSubnetID()}
            />
            <LightSettingBoxComponent
              darkMode
              mainTitle={'Device ID : '}
              value={deviceID}
              editable={true}
              keyboardType="numeric"
              onChangeText={() => handleChangeDeviceID()}
            />
            <LightSettingBoxComponent
              darkMode
              mainTitle={'Channel ID : '}
              value={ChannelID}
              editable={true}
              keyboardType="numeric"
              onChangeText={() => handleChangeChannel()}
            />
            <CheckBoxComponent
              title={'Is Automatic:  '}
              whiteColor
              textStyle={styles.checkBoxTextStyle}
            />
            <TimePicketComponent />
            <View style={styles.boxTitileinnerContainer}>
              <TextComponent
                textStyle={{color: colors.white}}
                title={'Fan Type : '}
              />
              <DropdownComponent
                data={data}
                darkMode
                labelField="label"
                valueField="value"
                value={value}
                mode='modal'
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <View style={styles.secondHeaderView}>
            <HeaderIconComponent
              firstIcon
              typeFirst={'material'}
              nameFirst={'save'}
              secondIcon
              typeSecond={'fa6'}
              nameSecond={'trash-can'}
              typeThird={'fa6'}
              nameThird={'circle-arrow-left'}
              firstIconPress={() => Alert.alert('Save icon pressed')}
              secondIconPress={() => Alert.alert('Trash icon pressed')}
              thirdIconPress={() => navigation.goBack()}
              iconColor={{color: colors.white}}
            />
          </View>
        </Container>
      </View>
    </BackgroundImage>
  );
};

export default IrrigationSetting;
