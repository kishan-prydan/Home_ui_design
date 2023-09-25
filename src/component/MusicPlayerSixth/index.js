import React from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import SliderComponent from '../common/SliderComponent';
import MusicController from '../MusicController';
import Icon from '../common/Icon';
import colors from '../../assets/theme/colors';

const MusicPlayerSixth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.iconFirstContainer}>
          <Icon
            type={'fa6'}
            name={'tower-cell'}
            size={100}
            style={{color: colors.inActive}}
          />
        </View>
        <View style={styles.sliderContainer}>
          <SliderComponent
            volumeButtonPresent
            initialValue={85}
            sliderStyle={styles.sliderStyle}
          />
        </View>
      </View>
      <View style={styles.musicControllerContainer}>
        <MusicController
          stopIcon
          backWardIcon
          forewardIcon
          shuffleIcon
          stopPress={() => Alert.alert('Stop button clicked')}
          backPress={() => Alert.alert('Back button clicked')}
          forewardPress={() => Alert.alert('Forward button clicked')}
          shufflePress={() => Alert.alert('Shuffle button clicked')}
        />
      </View>
    </View>
  );
};

export default MusicPlayerSixth;
