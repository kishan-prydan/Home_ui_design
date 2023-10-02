import React from 'react';
import {View} from 'react-native';
import CircleButton from '../CircleButton';
import RectangleMaxWidthButton from '../RectangleMaxWidthButton';
import styles from './styles';

const TwoButton = ({
  maxWidthButtonAvailable,
  firstIconType,
  firstIconName,
  secondIconType,
  secondIconName,
  onPressFirst,
  onPressSecond,
  circleTextOne,
  titleOne,
  titleTwo,
  disabledOne,
  circleTextTwo,
  disabledTwo,
  recFirstIconType,
  recFirstIconName,
  recSecondIconType,
  recSecondIconName,
  recThirdIconType,
  recThirdIconName,
  onPressRecFirst,
  onPressRecSecond,
  onPressRecThird,
  textStyle,
}) => {
  return !!maxWidthButtonAvailable ? (
    <View style={styles.circleButtonView}>
      <CircleButton
        iconType={firstIconType}
        iconName={firstIconName}
        onPress={onPressFirst}
        circleText={circleTextOne}
        title={titleOne}
        disabled={disabledOne}
      />
      <RectangleMaxWidthButton
        firstIconType={recFirstIconType}
        firstIconName={recFirstIconName}
        secondIconType={recSecondIconType}
        secondIconName={recSecondIconName}
        thirdIconType={recThirdIconType}
        thirdIconName={recThirdIconName}
        onPressFirst={onPressRecFirst}
        onPressSecond={onPressRecSecond}
        onPressThird={onPressRecThird}
      />
      <CircleButton
        iconType={secondIconType}
        iconName={secondIconName}
        onPress={onPressSecond}
        circleText={circleTextTwo}
        title={titleTwo}
        disabled={disabledTwo}
      />
    </View>
  ) : (
    <View style={styles.circleButtonView}>
      <CircleButton
        iconType={firstIconType}
        iconName={firstIconName}
        onPress={onPressFirst}
        circleText={circleTextOne}
        title={titleOne}
        disabled={disabledOne}
        textStyle={textStyle}
      />
      <CircleButton
        iconType={secondIconType}
        iconName={secondIconName}
        onPress={onPressSecond}
        circleText={circleTextTwo}
        title={titleTwo}
        disabled={disabledTwo}
        textStyle={textStyle}
      />
    </View>
  );
};

export default TwoButton;
