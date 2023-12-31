import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import Container from '../../component/common/Container';
import LightSettingBoxComponent from '../../component/LightSettingBoxComponent';
import TextComponent from '../../component/common/TextComponent';
import PressableIcon from '../../component/common/PressableIcon';
import CheckBoxComponent from '../../component/common/CheckBoxComponent';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import colors from '../../assets/theme/colors';
import DropdownComponent from '../../component/common/DropdownComponent';
import CustomButton from '../../component/common/CustomButton';
import routeNames from './../../constants/routeNames';

const TestCurtain = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  const data = [
    {label: 'Open Left', value: '1'},
    {label: 'Open Right', value: '2'},
    {label: 'Open Center', value: '3'},
    {label: 'Roll', value: '4'},
  ];

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [text, settext] = useState('Test curtain');
  const [secondText, setsecondText] = useState('IR Command');

  const handleCheckOne = () => {
    setCheckOne(!checkOne);
  };
  const handleCheckTwo = () => {
    setCheckTwo(!checkTwo);
  };
  const showHideCheckboxAndButton = () => {
    setCheckOne(false);
    setCheckTwo(false);
    setIsButtonVisible(!isButtonVisible);
  };

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

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconForth
            title={'Curtain Setting'}
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
              value={text}
              editable={true}
              onChangeText={() => handleChange()}
            />
            <View style={styles.boxTitileinnerContainer}>
              <TextComponent
                textStyle={{color: colors.white}}
                title={'Shade Type : '}
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
              mainTitle={'Managed by : '}
              value={secondText}
              editable={false}
              onChangeText={() => handleChangeOther()}
            />
          </View>
          <View style={styles.checkBoxStyle}>
            <CheckBoxComponent
              whiteColor
              checkBoxLeft
              title={'Has Stop'}
              textStyle={styles.checkBoxInnerStyle}
              checked={checkOne}
              onPress={() => handleCheckOne()}
            />
            <View style={{paddingLeft: 20}} />
            <CheckBoxComponent
              whiteColor
              checkBoxLeft
              title={'Has Rotate'}
              textStyle={styles.checkBoxInnerStyle}
              checked={checkTwo}
              onPress={() => handleCheckTwo()}
            />
          </View>
          <View style={styles.OnOffIconView}>
            <PressableIcon
              PressableTitle
              firstTitle={'On Icon : '}
              secondTitle={'Off Icon : '}
            />
          </View>
          <View style={styles.customButtonContainer}>
            <CustomButton
              title={'open'}
              upperCase
              style={styles.customButtonStyle}
              darkmode
              onPress={() => Alert.alert('open button pressed')}
            />
            <CustomButton
              title={'close'}
              upperCase
              style={styles.customButtonStyle}
              darkmode
              onPress={() => Alert.alert('Close button pressed')}
            />
          </View>
          <View style={styles.customButtonSecondContainer}>
            {(checkOne || checkTwo) && (
              <CustomButton
                title={'stop'}
                upperCase
                style={styles.customButtonStyle}
                darkmode
                onPress={() => [
                  showHideCheckboxAndButton(),
                  Alert.alert('Stop button pressed'),
                ]}
              />
            )}
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

export default TestCurtain;
