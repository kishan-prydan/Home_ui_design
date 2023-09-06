import React from 'react';
import Header from '../../component/common/Header';
import {Alert, View} from 'react-native';
import styles from './styles';
import BackgroundImage from '../../component/BackgroundImage';
import {useNavigation} from '@react-navigation/native';
import { SWEETHOME } from '../../constants/routeNames';

const HomeView = () => {
  const {navigate} = useNavigation();
  
  return (
    <>
      <View style={{paddingHorizontal: 20}}>
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
      <View style={styles.backgroudImageContainer}>
        <BackgroundImage
          onPress={() => {navigate(SWEETHOME);}}
        />
        {/* <BackgroundImage onPress={() => Alert.alert('Second Home View Card Pressed')}/> */}
      </View>
    </>
  );
};

export default HomeView;
