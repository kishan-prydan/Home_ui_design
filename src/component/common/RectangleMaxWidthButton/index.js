//import liraries
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ImageBackground} from 'react-native';
import Icon from '../Icon';
import imagePath from '../../../constants/imagePath';
import colors from '../../../assets/theme/colors';

const RectangleMaxWidthButton = ({
  onPressFirst,
  onPressSecond,
  onPressThird,
  rectangleIconViewStyle,
  firstIconType,
  firstIconName,
  secondIconType,
  secondIconName,
  thirdIconType,
  thirdIconName,
}) => {
  return (
    <ImageBackground
      source={imagePath.buttonMaxWidthRectangle}
      resizeMode="cover"
      style={{...styles.rectangleIconViewStyle, ...rectangleIconViewStyle}}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressFirst}>
        <Icon
          type={firstIconType}
          name={firstIconName}
          size={15}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressSecond}>
        <Icon
          type={secondIconType}
          name={secondIconName}
          size={15}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressThird}>
        <Icon
          type={thirdIconType}
          name={thirdIconName}
          size={15}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rectangleIconViewStyle: {
    height: 39,
    width: 130,
    flexDirection: 'row',
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

export default RectangleMaxWidthButton;
