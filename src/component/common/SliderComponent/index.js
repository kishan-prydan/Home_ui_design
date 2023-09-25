import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import {moderateScale, scale} from 'react-native-size-matters';
import {Slider} from '@rneui/base';
import ClickableIcon from '../ClickableIcon';

const SliderComponent = ({
  initialValue,
  volumeButtonPresent,
  sliderStyle,
  orientation,
  step,
  sliderValue,
  sliderValueChange
}) => {
  const [value, setValue] = useState(
    initialValue === null || '' || undefined ? 50 : initialValue,
  );

  const onValueChange = newValue => {
    setValue(newValue);
  };

  //problem in slider, so once that problem will be solved then just change the operator
  const increaseVolume = () => {
    value === 0 ? Alert.alert('reached maximum valume') : setValue(value - 5);
  };

  const decreaseVolume = () => {
    value === 100 ? Alert.alert('reached minimum valume') : setValue(value + 5);
  };

  return !!volumeButtonPresent ? (
    <View style={styles.container}>
      <ClickableIcon
        iconType={'fa6'}
        iconName={'volume-high'}
        iconSize={20}
        secondContainer={styles.iconContainer}
        iconStyle={{color: colors.primary}}
        onPress={() => increaseVolume()}
      />

      {/* there is some problem in this slider */}
      <Slider
        style={{...styles.slider, ...sliderStyle}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={colors.inActive}
        maximumTrackTintColor={colors.themeColor}
        thumbTintColor={colors.themeColor}
        thumbStyle={styles.thumbStyle}
        step={1}
        value={value}
        onValueChange={onValueChange}
        orientation="vertical"
      />
      <ClickableIcon
        iconType={'fa6'}
        iconName={'volume-xmark'}
        iconSize={20}
        secondContainer={styles.iconContainer}
        iconStyle={{color: colors.primary}}
        onPress={() => decreaseVolume()}
      />
      {/* check value here to know about the problem */}
      {/* <Text>{value}</Text> */}
    </View>
  ) : (
    // this slider is working fine
    <View style={styles.container}>
      <Slider
        style={{...styles.slider, ...sliderStyle}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={colors.themeColor}
        maximumTrackTintColor={colors.inActive}
        thumbTintColor={colors.themeColor}
        thumbStyle={styles.thumbStyle}
        step={step}
        value={sliderValue}
        onValueChange={sliderValueChange}
        orientation={orientation}
      />
      {/* <Text>{value}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  thumbStyle: {
    height: moderateScale(12),
    width: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
    height: 'auto',
    width: 40,
    paddingVertical: 15,
  },
});

export default SliderComponent;
