import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Slider} from 'react-native-elements';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './styles';

const RangeSlider = ({
  initialValue,
  titleText,
  titleTextPresent,
  sliderStyle,
}) => {
  const screenWidth = Dimensions.get('window').width;

  const [value, setValue] = useState(
    initialValue === undefined ? 0 : initialValue,
  );

  const onValueChange = newValue => {
    setValue(newValue);
  };

  const boxWidthPercentage = screenWidth;

  // console.log(screenWidth);
  return !!titleTextPresent ? (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{titleText}</Text>
      <Slider
        style={{
          // width: `${boxWidthPercentage}%`, 
          ...styles.slider,
          ...sliderStyle
        }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={colors.themeColor}
        maximumTrackTintColor={colors.sliderColor}
        thumbTintColor={colors.themeColor}
        thumbStyle={styles.thumbStyle}
        thumbProps={{
          children: (
            <Icon
              type={'materialCommunity'}
              name={'checkbox-blank-circle'}
              size={15}
              style={{color: 'white'}}
            />
          ),
        }}
        step={1}
        value={value}
        onValueChange={onValueChange}
        trackStyle={styles.trackStyle}
      />
      <Text style={styles.textStyle}>{`${value}%`}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={colors.themeColor}
        maximumTrackTintColor={colors.sliderColor}
        thumbTintColor={colors.themeColor}
        thumbStyle={styles.thumbStyle}
        thumbProps={{
          children: (
            <Icon
              type={'materialCommunity'}
              name={'checkbox-blank-circle'}
              size={16}
              style={{color: 'white'}}
            />
          ),
        }}
        step={1}
        value={value}
        onValueChange={onValueChange}
        trackStyle={styles.trackStyle}
      />
      <Text style={styles.textStyle}>{`${value}%`}</Text>
    </View>
  );
};

export default RangeSlider;
