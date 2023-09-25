import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../../assets/theme/colors';
import { scale } from 'react-native-size-matters';

const ClickableText = ({text, onPress, container, textStyle}) => {
  return (
    <TouchableOpacity style={container} onPress={onPress} activeOpacity={0.5}>
      <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    fontSize: scale(16),
    color: colors.themeColor,
	fontWeight: 600,
  },
});

export default ClickableText;
