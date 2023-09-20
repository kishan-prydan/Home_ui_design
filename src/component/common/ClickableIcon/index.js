import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const ClickableIcon = ({elevation, container, secondContainer, iconSize, onPress, iconType, iconName}) => {
  return !!elevation ? (
    <TouchableOpacity
      style={{...styles.container, ...container}}
      activeOpacity={0.7}
      onPress={onPress}>
      <Icon
        type={iconType}
        name={iconName}
        size={30}
        style={{color: colors.themeColor}}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={{...styles.secondContainer, ...secondContainer}}
      activeOpacity={0.7}
      onPress={onPress}>
      <Icon
        type={iconType}
        name={iconName}
        size={iconSize}
        style={{color: colors.themeColor}}
      />
    </TouchableOpacity>
  );
};

export default ClickableIcon;
