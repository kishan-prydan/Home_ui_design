import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import colors from '../../../assets/theme/colors';
import { moderateScale } from 'react-native-size-matters';

const BoxInput = ({value, onChangeText}) => {

  return (
    <View style={styles.textViewStyle}>
      <TextInput
        style={{paddingLeft: 10, color: 'white'}}
        onChangeText={onChangeText}
        value={value}
        autoCorrect={false}
        selectionColor={colors.themeColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textViewStyle: {
    backgroundColor: colors.containerBoxOpacity,
    width: '75%',
    borderRadius: 5,
    paddingRight: moderateScale(10),
    height: 45,
  },
});

export default BoxInput;
