import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import styles from './styles';

const RectangleIcon = ({
  elevation,
  container,
  secondContainer,
  iconSize,
  onPress,
  iconType,
  iconName,
  iconStyle,
  disabled,
  changeColor,
}) => {
  return !!elevation ? (
    <TouchableOpacity
      style={{...styles.container, ...container}}
      activeOpacity={0.7}
      onPress={onPress}>
      <Icon
        type={iconType}
        name={iconName}
        size={30}
        style={{...styles.iconStyle, ...iconStyle}}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={{...styles.secondContainer, ...secondContainer, ...changeColor}}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}>
      <Icon
        type={iconType}
        name={iconName}
        size={iconSize}
        style={{...styles.iconStyle, ...iconStyle}}
      />
    </TouchableOpacity>
  );
};

export default RectangleIcon;
