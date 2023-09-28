//import liraries
import React from 'react';
import {View} from 'react-native';
import BoxTitle from '../common/BoxTitle';
import TextComponent from '../common/TextComponent';
import styles from './styles';

const LightSettingBoxComponent = ({
  darkMode,
  mainTitle,
  container,
  value,
  onChangeText,
  editable,
  keyboardType
}) => {
  return !!darkMode ? (
    <View style={styles.container}>
      <TextComponent textStyle={styles.darkTextStyle} title={mainTitle} />
      <BoxTitle
        container={{...styles.boxContainer, ...container}}
        textStyle={styles.darkBoxTextStyle}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        keyboardType={keyboardType}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <TextComponent textStyle={styles.textStyle} title={mainTitle} />
      <BoxTitle
        container={container}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default LightSettingBoxComponent;
