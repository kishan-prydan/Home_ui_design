import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import Container from '../../component/common/Container';
import LightSettingBoxComponent from '../../component/LightSettingBoxComponent';
import TextComponent from '../../component/common/TextComponent';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import colors from '../../assets/theme/colors';
import DropdownComponent from '../../component/common/DropdownComponent';

const FanSetting = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  const data = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
  ];

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [text, settext] = useState('');
  const [secondText, setsecondText] = useState('');
  const [thirdText, setThirdText] = useState('');
  const [addChannel, setaddChannel] = useState('');
  const [gear, setGear] = useState('3');

  const handleChange = () => {
    settext(value => {
      value;
    });
  };

  const handleChangeOther = () => {
    setsecondText(value => {
      value;
    });
  };

  const handleChangeThird = () => {
    setThirdText(value => {
      value;
    });
  };
  const handleChangeChannel = () => {
    setaddChannel(value => {
      value;
    });
  };
  const handleChangeGear = () => {
    setGear(value => {
      value;
    });
  };

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconForth
            title={'FAN SETTINGS'}
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
              navigate(HOME);
            }}
            textView={{color: colors.primary}}
          />
        </View>
        <Container>
          <View style={styles.boxTitleContainer}>
            <LightSettingBoxComponent
              darkMode
              mainTitle={'Device Name : '}
              value={text}
              editable={true}
              onChangeText={() => handleChange()}
            />
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
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
            <LightSettingBoxComponent
              darkMode
              mainTitle={'Subnet ID : '}
              value={secondText}
              editable={true}
              keyboardType="numeric"
              onChangeText={() => handleChangeOther()}
            />
            <LightSettingBoxComponent
              darkMode
              mainTitle={'Device ID : '}
              value={thirdText}
              editable={true}
              keyboardType="numeric"
              onChangeText={() => handleChangeThird()}
            />
            <LightSettingBoxComponent
              darkMode
              mainTitle={'Add Channel : '}
              value={addChannel}
              editable={true}
              keyboardType="numeric"
              onChangeText={() => handleChangeChannel()}
            />
            <LightSettingBoxComponent
              darkMode
              mainTitle={'Gear : '}
              value={gear}
              editable={false}
              keyboardType="numeric"
              onChangeText={() => handleChangeGear()}
            />
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

export default FanSetting;
