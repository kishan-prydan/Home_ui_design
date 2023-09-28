import React from 'react';
import {View} from 'react-native';
import CircleWithIcon from '../common/CircleWithIcon/CircleWithIcon';
import RangeSlider from '../common/RangeSlider';
import styles from './styles';
import TextComponent from '../common/TextComponent';

const RgbwSliderComponent = ({
  mainTitle,
  iconName,
  iconType,
  iconStyle,
  titleTextPresent,
  value,
  text,
  circleWithIcon,
  onPress,
  onLongPress
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <TextComponent
          title={mainTitle}
          wrapper={styles.textStyleContainer}
          textStyle={styles.textStyle}
        />
      </View>
      <View style={styles.viewContainer}>
        <CircleWithIcon
          iconType={iconType}
          iconName={iconName}
          disabled={false}
          onPress={onPress}
          onLongPress={onLongPress}
          circleView={{...styles.circleWithIcon, ...circleWithIcon}}
          iconStyle={iconStyle}
        />

        <RangeSlider
          titleTextPresent={titleTextPresent}
          initialValue={value}
          titleText={text}
          sliderStyle={styles.rangeSiderStyle}
        />
      </View>
    </View>
  );
};

export default RgbwSliderComponent;
