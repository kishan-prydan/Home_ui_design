import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Header from '../../component/common/Header';
import styles from './styles';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import CircularSliderComponent from '../../component/CircularSliderComponent';

const FahrenheitScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconThird
          iconForth
          title={'TEST'}
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
            secondIconPress={() => Alert.alert('Eye icon pressed')}
          />
        </View>
        <View style={styles.secondBoxStyle}>
          <HeaderIconComponent
            PowerIconPresent
            backgroundIconType={'material'}
            backgroundIconName={'edit'}
            backgroundIconOnPress={() => Alert.alert('kishan1')}
            typeFirst={'fa'}
            nameFirst={'refresh'}
            firstIconPress={() => Alert.alert('kishan2')}
            typeSecond={'fa6'}
            nameSecond={'power-off'}
            secondIconPress={() => Alert.alert('kishan3')}
            typeThird={'fa5'}
            nameThird={'tachometer-alt'}
            textName={'1.5 KV'}
          />
        </View>
        <CircularSliderComponent />
      </BackgroundColor>
    </View>
  );
};

export default FahrenheitScreen;
