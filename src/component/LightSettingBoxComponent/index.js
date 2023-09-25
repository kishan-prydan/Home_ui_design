//import liraries
import React from 'react';
import {View} from 'react-native';
import BoxTitle from '../common/BoxTitle';
import TextComponent from '../common/TextComponent';
import styles from './styles';

const LightSettingBoxComponent = ({
  darkMode,
  mainTitle,
  boxTitle,
  container,
}) => {
  return !!darkMode ? (
    <View style={styles.container}>
      <TextComponent textStyle={styles.darkTextStyle} title={mainTitle} />
      <BoxTitle
        boxTitle={boxTitle}
        container={{...styles.boxContainer, ...container}}
		textStyle={styles.darkBoxTextStyle}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <TextComponent textStyle={styles.textStyle} title={mainTitle} />
      <BoxTitle boxTitle={boxTitle} container={container} />
    </View>
  );
};

export default LightSettingBoxComponent;
