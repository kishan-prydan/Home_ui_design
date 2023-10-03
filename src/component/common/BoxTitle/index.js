//import liraries
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const BoxTitle = ({
  clickableText,
  boxTitle,
  container,
  textStyle,
  onPress,
  onChangeText,
  value,
  editable,
  disabled,
  keyboardType,
  secureTextEntry,
}) => {
  return !!clickableText ? (
    <TouchableOpacity
      style={{...styles.container, ...container}}
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disabled}>
      <Text style={{...styles.textStyle, ...textStyle}}>{boxTitle}</Text>
    </TouchableOpacity>
  ) : (
    <View style={{...styles.container, ...container}}>
      <TextInput
        style={{...styles.textStyle, ...textStyle}}
        onChangeText={onChangeText}
        value={value}
        selectionColor={colors.themeColor}
        editable={editable}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default BoxTitle;
