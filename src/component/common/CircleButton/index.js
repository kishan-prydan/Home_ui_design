import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from '../Icon';
import imagePath from '../../../constants/imagePath';
import colors from '../../../assets/theme/colors';
import TextComponent from '../TextComponent';
import { moderateScale, scale } from 'react-native-size-matters';

const CircleButton = ({
  onPress,
  circleText,
  title,
  iconType,
  iconName,
  circleIconViewStyle,
  disabled,
  textStyle
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} disabled={disabled}>
      <ImageBackground
        source={imagePath.buttonCircle}
        resizeMode="cover"
        style={{...styles.circleIconViewStyle, ...circleIconViewStyle}}>
        {!!circleText ? (
          <TextComponent title={title} textStyle={{...styles.textStyle, ...textStyle}} />
        ) : (
          <Icon
            type={iconType}
            name={iconName}
            size={15}
            style={styles.iconStyle}
          />
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleIconViewStyle: {
    height: moderateScale(40),
    width: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: colors.white,
  },
  textStyle: {
    color: colors.white,
    fontSize: scale(9),
    fontWeight: 700,
    // textTransform: 'uppercase',
  },
});

export default CircleButton;
