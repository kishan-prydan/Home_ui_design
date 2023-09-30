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
  title,
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
}) => {
  return !!maxWidthButtonAvailable ? (
    <View style={styles.circleButtonView}>
      <CircleButton
        iconType={firstIconType}
        iconName={firstIconName}
        onPress={onPressFirst}
        circleText={circleTextOne}
        title={title}
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
        title={title}
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
        title={title}
        disabled={disabledOne}
      />
      <CircleButton
        iconType={secondIconType}
        iconName={secondIconName}
        onPress={onPressSecond}
        circleText={circleTextTwo}
        title={title}
        disabled={disabledTwo}
      />
    </View>
  );
};

export default TwoButton;
