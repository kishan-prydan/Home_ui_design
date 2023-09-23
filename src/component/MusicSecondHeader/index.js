import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import styles from './styles';
import ClickableIcon from '../common/ClickableIcon';
import colors from '../../assets/theme/colors';

const MusicSecondHeader = ({
  onPressFirst,
  onPressSecond,
  onPressThird,
  onPressFourth,
  onPressFifth,
  onPressSixth,
}) => {
  const [elevatedBox, setElevatedBox] = useState(1);

  const toggleElevation = boxNumber => {
    if (elevatedBox === boxNumber) {
      return;
    } else {
      setElevatedBox(boxNumber);
    }
  };

  const boxStyles = boxNumber => {
    return [styles.firstIconStyle, elevatedBox === boxNumber && styles.effect];
  };

  const handlePressOne = () => {
    if (toggleElevation(1)) {
      toggleElevation(1);
    }
    if (onPressFirst) {
      onPressFirst();
    }
  };
  const handlePressTwo = () => {
    if (toggleElevation(2)) {
      toggleElevation(2);
    }
    if (onPressSecond) {
      onPressSecond();
    }
  };
  const handlePressThree = () => {
    if (toggleElevation(3)) {
      toggleElevation(3);
    }
    if (onPressThird) {
      onPressThird();
    }
  };
  const handlePressFour = () => {
    if (toggleElevation(4)) {
      toggleElevation(4);
    }
    if (onPressFourth) {
      onPressFourth();
    }
  };
  const handlePressFive = () => {
    if (toggleElevation(5)) {
      toggleElevation(5);
    }
    if (onPressFifth) {
      onPressFifth();
    }
  };
  const handlePressSix = () => {
    if (toggleElevation(6)) {
      toggleElevation(6);
    }
    if (onPressSixth) {
      onPressSixth();
    }
  };

  return (
    <View style={styles.container}>
      <View style={boxStyles(1)}>
        <ClickableIcon
          iconType={'fa5'}
          iconName={'sd-card'}
          iconSize={16}
          changeColor={
            elevatedBox === 1
              ? {backgroundColor: colors.cardIconColorOne}
              : {backgroundColor: colors.musicBackgroundColorOne}
          }
          iconStyle={
            elevatedBox === 1
              ? {color: colors.white}
              : {color: colors.cardIconColorOne}
          }
          secondContainer={styles.iconSecondContainer}
          onPress={handlePressOne}
        />
      </View>
      <View style={boxStyles(2)}>
        <ClickableIcon
          iconType={'fa6'}
          iconName={'computer'}
          iconSize={16}
          secondContainer={styles.iconSecondContainer}
          changeColor={
            elevatedBox === 2
              ? {backgroundColor: colors.cardIconColorThree}
              : {backgroundColor: colors.musicBackgroundColorTwo}
          }
          iconStyle={
            elevatedBox === 2 ? {color: colors.white} : {color: colors.green}
          }
          onPress={handlePressTwo}
        />
      </View>
      <View style={boxStyles(3)}>
        <ClickableIcon
          iconType={'fa6'}
          iconName={'radio'}
          iconSize={16}
          secondContainer={styles.iconSecondContainer}
          changeColor={
            elevatedBox === 3
              ? {backgroundColor: colors.blue}
              : {backgroundColor: colors.musicBackgroundColorThree}
          }
          iconStyle={
            elevatedBox === 3 ? {color: colors.white} : {color: colors.blue}
          }
          onPress={handlePressThree}
        />
      </View>
      <View style={boxStyles(4)}>
        <ClickableIcon
          iconType={'entypo'}
          iconName={'sound-mix'}
          iconSize={16}
          secondContainer={styles.iconSecondContainer}
          changeColor={
            elevatedBox === 4
              ? {backgroundColor: colors.pink}
              : {backgroundColor: colors.musicBackgroundColorFour}
          }
          iconStyle={
            elevatedBox === 4 ? {color: colors.white} : {color: colors.pink}
          }
          onPress={handlePressFour}
        />
      </View>
      <View style={boxStyles(5)}>
        <ClickableIcon
          iconType={'fa'}
          iconName={'chrome'}
          iconSize={16}
          secondContainer={styles.iconSecondContainer}
          changeColor={
            elevatedBox === 5
              ? {backgroundColor: colors.chromeColor}
              : {backgroundColor: colors.musicBackgroundColorFive}
          }
          iconStyle={
            elevatedBox === 5
              ? {color: colors.white}
              : {color: colors.chromeColor}
          }
          onPress={handlePressFive}
        />
      </View>
      <View style={boxStyles(6)}>
        <ClickableIcon
          iconType={'fa5'}
          iconName={'desktop'}
          iconSize={16}
          secondContainer={styles.iconSecondContainer}
          changeColor={
            elevatedBox === 6
              ? {backgroundColor: colors.orange}
              : {backgroundColor: colors.musicBackgroundColorSix}
          }
          iconStyle={
            elevatedBox === 6 ? {color: colors.white} : {color: colors.orange}
          }
          onPress={handlePressSix}
        />
      </View>
    </View>
  );
};

export default MusicSecondHeader;
