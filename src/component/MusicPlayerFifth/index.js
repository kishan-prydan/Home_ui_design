import React, {useState} from 'react';
import {View, Alert, Text} from 'react-native';
import styles from './styles';
import SliderComponent from '../common/SliderComponent';
import MusicController from '../MusicController';
import RectangleIcon from '../common/RectangleIcon';
import ClickableText from '../common/ClickableText';

const MusicPlayerFifth = () => {
  const [value, setValue] = useState(20);

  const onValueChange = newValue => {
    setValue(newValue);
  };

  const maxTime = 10;
  const minTime = 0;

  const calculateTime = () => {
    const time = Math.round((value / 100) * (maxTime - minTime) + minTime);
    const hours = Math.floor(time);
    const minutes = (time - hours) * 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}`;
  };

  return (
    <View style={styles.container} >
      <View style={styles.innerContainer}>
        <View style={styles.iconFirstContainer}>
          <ClickableText
            text={'Select Song'}
            onPress={() => Alert.alert('text pressed')}
          />
        </View>
        <View style={styles.sliderContainer}>
          <View style={styles.iconContainer}>
            <RectangleIcon
              iconType={'material'}
              iconName={'cast'}
              iconSize={18}
              onPress={() => Alert.alert('icon pressed')}
            />
          </View>
          <SliderComponent
            volumeButtonPresent
            initialValue={85}
            sliderStyle={styles.sliderStyle}
          />
        </View>
      </View>
      <View style={styles.secondSliderContainer}>
        <SliderComponent
          orientation="horizontal"
          sliderValue={value}
          sliderValueChange={onValueChange}
          step={1}
          sliderStyle={styles.secondSliderStyle}
        />
        <Text style={styles.textStyle}>{calculateTime()}</Text>
      </View>
      <View style={styles.musicControllerContainer}>
        <MusicController
          backWardIcon
          forewardIcon
          backPress={() => Alert.alert('Back button clicked')}
          forewardPress={() => Alert.alert('Forward button clicked')}
        />
      </View>
    </View>
  );
};

export default MusicPlayerFifth;
