//import liraries
import React, {Component} from 'react';
import {View} from 'react-native';
import RectangleButton from '../RectangleButton';
import styles from './styles';

const ThreeButton = ({
  firstIcon,
  secondIcon,
  thirdIcon,
  forthIcon,
  rectangleTextFirst,
  rectangleTextSecond,
  rectangleTextThird,
  rectangleTextForth,
  firstTitle,
  firstIconName,
  firstIconType,
  onPressFirst,
  secondTitle,
  secondIconName,
  secondIconType,
  onPressSecond,
  thirdTitle,
  thirdIconName,
  thirdIconType,
  onPressThird,
  forthTitle,
  forthIconType,
  forthIconName,
  onPressForth,
  rectangleIconViewStyle,
  size,
  textStyle,
}) => {
  return (
    <View style={styles.container}>
      {!!firstIcon && (
        <RectangleButton
          rectangleText={rectangleTextFirst}
          title={firstTitle}
          iconType={firstIconType}
          iconName={firstIconName}
          onPress={onPressFirst}
          rectangleIconViewStyle={rectangleIconViewStyle}
          size={size}
          textStyle={textStyle}
        />
      )}

      {!!secondIcon && (
        <RectangleButton
          rectangleText={rectangleTextSecond}
          title={secondTitle}
          iconType={secondIconType}
          iconName={secondIconName}
          onPress={onPressSecond}
          rectangleIconViewStyle={rectangleIconViewStyle}
          size={size}
          textStyle={textStyle}
        />
      )}

      {!!thirdIcon && (
        <RectangleButton
          rectangleText={rectangleTextThird}
          title={thirdTitle}
          iconType={thirdIconType}
          iconName={thirdIconName}
          onPress={onPressThird}
          rectangleIconViewStyle={rectangleIconViewStyle}
          size={size}
          textStyle={textStyle}
        />
      )}

      {!!forthIcon && (
        <RectangleButton
          rectangleText={rectangleTextForth}
          title={forthTitle}
          iconType={forthIconType}
          iconName={forthIconName}
          onPress={onPressForth}
          rectangleIconViewStyle={rectangleIconViewStyle}
          size={size}
          textStyle={textStyle}
        />
      )}
    </View>
  );
};

export default ThreeButton;
