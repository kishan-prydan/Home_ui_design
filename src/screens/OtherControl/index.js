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
import PressableIcon from '../../component/common/PressableIcon';
import routeNames from './../../constants/routeNames';

const OtherControl = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  const data = [
    {label: 'Single Control', value: '1'},
    {label: 'Interlock Control', value: '2'},
    {label: 'Logic Control', value: '3'},
  ];

  const [text, settext] = useState('');
  const [secondText, setsecondText] = useState('');
  const [thirdText, setThirdText] = useState('');
  const [logicNo, setlogicNo] = useState('');
  const [logicOff, setlogicOff] = useState('');

  const [addChannel, setAddChannel] = useState('');
  const [channelOne, setChannelOne] = useState('');
  const [ChannelTwo, setChannelTwo] = useState('');

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);

  const handleChange = () => {
    settext(value => {
      value;
    });
  };
  const handleAddChannel = () => {
    setAddChannel(value => {
      value;
    });
  };
  const handleChannelOne = () => {
    setChannelOne(value => {
      value;
    });
  };
  const handleChannelTwo = () => {
    setChannelTwo(value => {
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
  const handleChangeLogicNo = () => {
    setlogicNo(value => {
      value;
    });
  };
  const handleChangeLogicOnOff = () => {
    setlogicOff(value => {
      value;
    });
  };

  const handleDropdownChange = value => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);

    if (value === '1') {
      setShowComponent1(true);
    } else if (value === '2') {
      setShowComponent2(true);
    } else if (value === '3') {
      setShowComponent3(true);
    }
  };

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconForth
            title={'Other Control Settings'}
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
              mainTitle={'Remark : '}
              value={text}
              editable={true}
              onChangeText={() => handleChange()}
            />
            <View style={styles.boxTitileinnerContainer}>
              <TextComponent
                textStyle={{color: colors.white}}
                title={'Type : '}
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
                  handleDropdownChange(item.value);
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
          </View>

          {showComponent1 && (
            <View>
              <LightSettingBoxComponent
                darkMode
                mainTitle={'Add Channel : '}
                value={addChannel}
                editable={true}
                keyboardType="numeric"
                onChangeText={() => handleAddChannel()}
              />
            </View>
          )}

          {showComponent2 && (
            <View>
              <LightSettingBoxComponent
                darkMode
                mainTitle={'Channel 1 : '}
                value={channelOne}
                editable={true}
                keyboardType="numeric"
                onChangeText={() => handleChannelOne()}
              />
              <LightSettingBoxComponent
                darkMode
                mainTitle={'Channel 2 : '}
                value={ChannelTwo}
                editable={true}
                keyboardType="numeric"
                onChangeText={() => handleChannelTwo()}
              />
            </View>
          )}

          {showComponent3 && (
            <View>
              <LightSettingBoxComponent
                darkMode
                mainTitle={'Logic No. ON : '}
                value={logicNo}
                editable={true}
                keyboardType="numeric"
                onChangeText={() => handleChangeLogicNo()}
              />
              <LightSettingBoxComponent
                darkMode
                mainTitle={'Logic No. OFF : '}
                value={logicOff}
                editable={true}
                keyboardType="numeric"
                onChangeText={() => handleChangeLogicOnOff()}
              />
            </View>
          )}

          <View style={styles.pressableIconStyle}>
            <TextComponent
              title={'Select Icon : '}
              textStyle={{color: colors.white}}
            />
            <PressableIcon
              bottomTextPresent
              whiteText
              iconColor
              iconType={'fa6'}
              iconName={'gamepad'}
              bottomFirstTitle={'Offstate'}
              bottomSecondTitle={'Onstate'}
              style={{color: colors.themeColor}}
              backgroundColor={{backgroundColor: colors.white}}
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

export default OtherControl;
