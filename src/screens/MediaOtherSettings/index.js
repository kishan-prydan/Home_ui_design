import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import Container from '../../component/common/Container';
import LightSettingBoxComponent from '../../component/LightSettingBoxComponent';
import styles from './styles';
import colors from '../../assets/theme/colors';
import InputBox from './inputBox';

const MediaOtherSettings = () => {
  const {navigate} = useNavigation();

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconForth
            title={'Media Settings'}
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
			<InputBox />
        </Container>
      </View>
    </BackgroundImage>
  );
};

export default MediaOtherSettings;
