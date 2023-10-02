//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ImageBackground} from 'react-native';
import Icon from '../Icon';
import imagePath from '../../../constants/imagePath';
import colors from '../../../assets/theme/colors';
import TextComponent from '../TextComponent';

const RectangleButton = ({
  onPress,
  rectangleIconViewStyle,
  iconType,
  iconName,
  size,
  title,
  rectangleText,
  textStyle
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <ImageBackground
        source={imagePath.buttonRectangle}
        resizeMode="cover"
        style={{...styles.rectangleIconViewStyle, ...rectangleIconViewStyle}}>
        {!!rectangleText ? (
          <TextComponent title={title} textStyle={{...styles.textStyle, ...textStyle}} />
        ) : (
          <Icon
            type={iconType}
            name={iconName}
            size={size}
            style={styles.iconStyle}
          />
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rectangleIconViewStyle: {
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: colors.white,
  },
  textStyle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
});

export default RectangleButton;
