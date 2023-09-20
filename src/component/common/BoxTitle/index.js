//import liraries
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const BoxTitle = ({clickableText, boxTitle, container, textStyle, onPress}) => {
  return !!clickableText ? (
    <TouchableOpacity style={{...styles.container, ...container}} onPress={onPress} activeOpacity={0.5}>
      <Text style={{...styles.textStyle, ...textStyle}}>{boxTitle}</Text>
    </TouchableOpacity>
  ) : (
    <View style={{...styles.container, ...container}}>
      <Text style={{...styles.textStyle, ...textStyle}}>{boxTitle}</Text>
    </View>
  );
};

export default BoxTitle;
