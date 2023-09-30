import React from 'react';
import {View} from 'react-native';
import CircleButton from '../CircleButton';
import styles from './styles';

const FourButton = ({
  firstIconType,
  firstIconName,
  secondIconType,
  secondIconName,
  thirdIconType,
  thirdIconName,
  forthIconType,
  forthIconName,
  onPressFirst,
  onPressSecond,
  onPressThird,
  onPressForth,
  circleTextOne,
  circleTextTwo,
  circleTextThree,
  circleTextForth,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  disabledOne,
  disabledTwo,
  disabledThree,
  disabledForth,
  exrtraButton,
  extraIconType,
  extraIconName,
  onPressExtra,
  circleTextExtra,
  extraTitle,
  disabledExtra
}) => {
  return (
    <View style={styles.circleButtonView}>
      <CircleButton
        iconType={firstIconType}
        iconName={firstIconName}
        onPress={onPressFirst}
        circleText={circleTextOne}
        title={titleOne}
        disabled={disabledOne}
      />
      <CircleButton
        iconType={secondIconType}
        iconName={secondIconName}
        onPress={onPressSecond}
        circleText={circleTextTwo}
        title={titleTwo}
        disabled={disabledTwo}
      />
      <CircleButton
        iconType={thirdIconType}
        iconName={thirdIconName}
        onPress={onPressThird}
        circleText={circleTextThree}
        title={titleThree}
        disabled={disabledThree}
      />
      <CircleButton
        iconType={forthIconType}
        iconName={forthIconName}
        onPress={onPressForth}
        circleText={circleTextForth}
        title={titleFour}
        disabled={disabledForth}
      />
      {!!exrtraButton ? (
        <CircleButton
          iconType={extraIconType}
          iconName={extraIconName}
          onPress={onPressExtra}
          circleText={circleTextExtra}
          title={extraTitle}
          disabled={disabledExtra}
        />
      ) : (
        ''
      )}
    </View>
  );
};

export default FourButton;
