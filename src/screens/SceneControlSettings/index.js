import React, {useState} from 'react';
import {View, Alert, Text} from 'react-native';
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
import PressableIcon from '../../component/common/PressableIcon';
import data from './data';

const ScenceControlSettings = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  const [values, setValues] = useState(data.map(value => value.boxTitle));

  const handleInputChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconForth
            title={'Scence Control Settings'}
            type={'ioni'}
            name={'arrow-undo'}
            firstType={'entypo'}
            firstName={'home'}
            secondType={'entypo'}
            secondName={'home'}
            thirdType={'entypo'}
            thirdName={'menu'}
            size={24}
            onPressFirst={() => {
              navigate(APPDRAWERNAVIGATION);
            }}
            onPressSecond={() => {
              navigate(HOME);
            }}
            textView={{color: colors.primary}}
          />
        </View>
        <Container>
          <View style={styles.boxTitleContainer}>
            {data?.map((item, index) => {
              return (
                <LightSettingBoxComponent
                  key={index}
                  darkMode
                  mainTitle={item.mainTitle}
                  value={values[index]}
                  onChangeText={newValue => handleInputChange(index, newValue)}
                  editable={item.edit}
                  keyboardType={item.keyboardType}
                />
              );
            })}
          </View>

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
              iconName={'video'}
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

export default ScenceControlSettings;
