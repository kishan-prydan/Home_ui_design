import React from 'react';
import {Alert, View} from 'react-native';
import RectangleMaxHeightButton from '../RectangleMaxHeightButton';
import MiddleButton from './MiddleButton';
import styles from './styles';

const VolumeChangeButton = () => {
  return (
    <View style={styles.container}>
      <RectangleMaxHeightButton
        firstIconType={'material'}
        firstIconName={'keyboard-arrow-up'}
        onPressFirst={() => Alert.alert('Ch up button pressed')}
        title={'CH'}
        secondIconType={'material'}
        secondIconName={'keyboard-arrow-down'}
        onPressSecond={() => Alert.alert('Ch down button pressed')}
      />
      <MiddleButton
        leftIconType={'ant'}
        leftIconName={'caretleft'}
        onPressLeft={() => Alert.alert('Left button clicked')}
        rightIconType={'ant'}
        rightIconName={'caretright'}
        onPressRight={() => Alert.alert('Right button clicked')}
        topIconType={'ant'}
        topIconName={'caretup'}
        onPressTop={() => Alert.alert('Up button clicked')}
        bottomIconType={'ant'}
        bottomIconName={'caretdown'}
        onPressBottom={() => Alert.alert('Down button clicked')}
        circleText
        title={'OK'}
        textStyle={styles.textStyle}
        onPressCenter={() => Alert.alert('OK button clicked')}
      />
      <RectangleMaxHeightButton
        firstIconType={'entypo'}
        firstIconName={'plus'}
        onPressFirst={() => Alert.alert('Vol up button pressed')}
        title={'VOL'}
        secondIconType={'entypo'}
        secondIconName={'minus'}
        onPressSecond={() => Alert.alert('Vol down button pressed')}
      />
    </View>
  );
};

export default VolumeChangeButton;
