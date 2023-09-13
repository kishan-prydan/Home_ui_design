//import liraries
import React, {Component} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import colors from '../../assets/theme/colors';
import BackgroundColor from '../../component/common/BackgroundColor';

const Light = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <Header
          iconFirst
          iconThird
          iconForth
          title={'Light'}
          type={'fa6'}
          name={'circle-plus'}
          firstType={'entypo'}
          firstName={'home'}
          secondType={'entypo'}
          secondName={'home'}
          thirdType={'entypo'}
          thirdName={'menu'}
          forthType={'fs5'}
          forthName={'backward'}
          size={24}
          onPressFirst={() => {
            navigate(APPDRAWERNAVIGATION);
          }}
          onPressSecond={() => {
            navigate(HOME);
          }}
          onPressForth={() => {
            Alert.alert('Add button pressed');
          }}
        />
      </View>
	  <BackgroundColor />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Light;
