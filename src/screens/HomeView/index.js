import React from 'react';
import Header from '../../component/common/Header';
import {Alert, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {SWEETHOME} from '../../constants/routeNames';
import CircleWithIcon from '../../component/common/CircleWithIcon/CircleWithIcon';
import colors from '../../assets/theme/colors';
import ClickableBackgroundImage from '../../component/BackgroundImage';
import { moderateScale } from 'react-native-size-matters';

const HomeView = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <View style={{paddingHorizontal: moderateScale(20)}}>
        <Header
          iconFirst
          iconSecond
          iconForth
          type={'material'}
          name={'settings'}
          firstType={'entypo'}
          firstName={'home'}
          secondType={'fa'}
          secondName={'building'}
          thirdType={'material'}
          thirdName={'settings-suggest'}
          size={24}
          onPressFirst={() => {
            Alert.alert('First setting button pressed');
          }}
          onPressSecond={() => {
            Alert.alert('Home button pressed');
          }}
          onPressForth={() => {
            Alert.alert('Setting button pressed');
          }}
        />
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.backgroudImageContainer}>
          <ClickableBackgroundImage
            onPress={() => {
              navigate(SWEETHOME);
            }}
          />
        </View>

        <View style={styles.iconView}>
          <CircleWithIcon
            circleView={{backgroundColor: colors.secondary}}
            iconStyle={{color: colors.yellow}}
            iconType={'ant'}
            iconName={'star'}
            disabled={false}
            onPress={() => {
              Alert.alert('Bottom star button pressed');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default HomeView;
