import React from 'react';
import {View, Alert, Text} from 'react-native';
import Header from '../../component/common/Header';
import {
  APPDRAWERNAVIGATION,
  HOME
} from '../../constants/routeNames';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import PressableIconText from '../../component/common/PressableIconText';
import colors from '../../assets/theme/colors';

const RgbwComponent = () => {
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

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text style={{fontSize: 32, color: 'red', fontWeight: 'bold'}}>Kishan</Text>
		</View>
      </BackgroundColor>
    </View>
  );
};

export default RgbwComponent;
