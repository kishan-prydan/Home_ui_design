//import liraries
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MusicController from '../MusicController';

const MusicPlayerFourth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <MusicController />
      </View>
    </View>
  );
};

export default MusicPlayerFourth;
