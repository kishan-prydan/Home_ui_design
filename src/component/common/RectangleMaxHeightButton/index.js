//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ImageBackground} from 'react-native';
import Icon from '../Icon';
import imagePath from '../../../constants/imagePath';
import colors from '../../../assets/theme/colors';
import TextComponent from '../TextComponent';

const RectangleMaxHeightButton = ({
  onPressFirst,
  onPressSecond,
  rectangleIconViewStyle,
  firstIconType,
  firstIconName,
  secondIconType,
  secondIconName,
  title,
}) => {
  return (
    <ImageBackground
      source={imagePath.buttonMaxHeigthRectangle}
      resizeMode="cover"
      style={{...styles.rectangleIconViewStyle, ...rectangleIconViewStyle}}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPressFirst}>
        <Icon
          type={firstIconType}
          name={firstIconName}
          size={25}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <TextComponent title={title} textStyle={styles.textStyle} />
      <TouchableOpacity activeOpacity={0.6} onPress={onPressSecond}>
        <Icon
          type={secondIconType}
          name={secondIconName}
          size={25}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rectangleIconViewStyle: {
    height: 150,
    width: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
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

export default RectangleMaxHeightButton;
