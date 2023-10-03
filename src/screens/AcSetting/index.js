import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import BackgroundColor from '../../component/common/BackgroundColor';
import styles from './styles';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import Container from '../../component/common/Container';
import InputValue from './InputValue';

const AcSetting = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconForth
          title={'AC Setting'}
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
        />
      </View>
      <BackgroundColor>
        <Container>
          
          <InputValue />
          
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

export default AcSetting;
