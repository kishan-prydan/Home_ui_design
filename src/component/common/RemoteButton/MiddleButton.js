import React from 'react';
import {View} from 'react-native';
import CircleButton from '../CircleButton';
import styles from './styles';

const MiddleButton = ({
  leftIconType,
  leftIconName,
  onPressLeft,
  rightIconType,
  rightIconName,
  onPressRight,
  topIconName,
  topIconType,
  onPressTop,
  centerIconType,
  centerIconName,
  onPressCenter,
  bottomIconType,
  bottomIconName,
  onPressBottom,
  circleText,
  title,
  disabledOne,
  disabledTwo,
  disabledThree,
  disabledFour,
  disabledFive,
  textStyle,
}) => {
  return (
    <View style={styles.innerViewStyle}>
      <CircleButton
        iconType={leftIconType}
        iconName={leftIconName}
        onPress={onPressLeft}
        disabled={disabledOne}
      />
      <View style={{alignItems: 'center'}}>
        <CircleButton
          iconType={topIconType}
          iconName={topIconName}
          onPress={onPressTop}
          disabled={disabledTwo}
        />
        <CircleButton
          iconType={centerIconType}
          iconName={centerIconName}
          onPress={onPressCenter}
          circleIconViewStyle={styles.iocnStyle}
          disabled={disabledThree}
          circleText={circleText}
          title={title}
          textStyle={textStyle}
        />
        <CircleButton
          iconType={bottomIconType}
          iconName={bottomIconName}
          onPress={onPressBottom}
          disabled={disabledFour}
        />
      </View>
      <CircleButton
        iconType={rightIconType}
        iconName={rightIconName}
        onPress={onPressRight}
        disabled={disabledFive}
      />
    </View>
  );
};

export default MiddleButton;
