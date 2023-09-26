//import liraries
import React from 'react';
import {View, Alert} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import {
  APPDRAWERNAVIGATION,
  HOME,
  RGBWCOMPONENT,
} from '../../constants/routeNames';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import PressableIconText from '../../component/common/PressableIconText';
import colors from '../../assets/theme/colors';
import Container from '../../component/common/Container';

const Rgbw = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconThird
          iconForth
          title={'RGBW'}
          type={'fa6'}
          name={'circle-plus'}
          firstType={'entypo'}
          firstName={'home'}
          secondType={'entypo'}
          secondName={'home'}
          thirdType={'entypo'}
          thirdName={'menu'}
          forthType={'ioni'}
          forthName={'arrow-undo'}
          size={24}
          onPressFirst={() => {
            navigate(APPDRAWERNAVIGATION);
          }}
          onPressSecond={() => {
            navigate(HOME);
          }}
          onPressForth={() => Alert.alert('Add Icon Pressed')}
        />
      </View>
      <BackgroundColor>
        <View style={styles.secondHeaderView}>
          <HeaderIconComponent
            secondIcon
            typeSecond={'fa5'}
            nameSecond={'eye'}
            textPresend
            textName={'0.4 KV'}
            firstIconPress={() => Alert.alert('Refresh icon pressed')}
            secondIconPress={() => Alert.alert('Eye icon pressed')}
          />
        </View>

        <Container>
          <PressableIconText
            onPress={() => navigate(RGBWCOMPONENT)}
            circleStyle={{backgroundColor: colors.iconSecondColor}}
            iconType={'fa6'}
            iconName={'lightbulb'}
            title={'RGBW'}
          />
        </Container>
      </BackgroundColor>
    </View>
  );
};

export default Rgbw;
