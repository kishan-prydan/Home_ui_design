//import liraries
import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Icon from '../Icon';
import styles from './styles';

const CircleWithIcon = ({
  onPress,
  effectColor,
  circleView,
  circleViewEffect,
  iconStyle,
  iconType,
  iconName,
  disabled,
  onLongPress,
}) => {
  return (
    <TouchableWithoutFeedback
      style={styles.componentStyle}
      onLongPress={onLongPress}
      onPress={onPress}
      delayLongPress={150}
      disabled={disabled}
      activeOpacity={0.7}>
      {!!effectColor ? (
        <View style={{...styles.circleViewEffect, ...circleViewEffect}}>
          <Icon
            type={iconType}
            name={iconName}
            size={25}
            style={{...iconStyle}}
          />
        </View>
      ) : (
        <View style={{...styles.circleView, ...circleView}}>
          <Icon
            type={iconType}
            name={iconName}
            size={25}
            style={{...iconStyle}}
          />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

export default CircleWithIcon;
