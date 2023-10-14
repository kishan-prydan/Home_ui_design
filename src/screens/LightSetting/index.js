import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import BackgroundColor from '../../component/common/BackgroundColor';
import styles from './styles';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import LightSettingBoxComponent from '../../component/LightSettingBoxComponent';
import PressableIcon from '../../component/common/PressableIcon';
import TextComponent from '../../component/common/TextComponent';
import colors from '../../assets/theme/colors';
import CheckBoxComponent from '../../component/common/CheckBoxComponent';
import Container from '../../component/common/Container';
import data from './data';
import routeNames from './../../constants/routeNames';

const LightSetting = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  const [values, setValues] = useState(data.map(value => value.boxTitle));

  const handleInputChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconForth
          title={'Light Setting'}
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
        />
      </View>
      <BackgroundColor>
        <Container>
          <View>
            {data?.map((item, index) => {
              return (
                <LightSettingBoxComponent
                  key={index}
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
              textStyle={{color: colors.primary}}
            />
            <PressableIcon iconType={'fa5'} iconName={'lightbulb'} />
          </View>
          <View style={styles.checkBoxStyle}>
            <CheckBoxComponent title={'Allow Control Main Screen '} />
          </View>
          <View style={styles.secondHeaderView}>
            <HeaderIconComponent
              firstIcon
              typeFirst={'ioni'}
              nameFirst={'save-sharp'}
              secondIcon
              typeSecond={'fa6'}
              nameSecond={'trash-can'}
              typeThird={'fa6'}
              nameThird={'circle-arrow-left'}
              firstIconPress={() => Alert.alert('Save icon pressed')}
              secondIconPress={() => Alert.alert('Trash icon pressed')}
              thirdIconPress={() => navigation.goBack()}
            />
          </View>
        </Container>
      </BackgroundColor>
    </View>
  );
};

export default LightSetting;
