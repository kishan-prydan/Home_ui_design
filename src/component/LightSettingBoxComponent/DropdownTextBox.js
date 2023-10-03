//import liraries
import React, {useState} from 'react';
import {View} from 'react-native';
import BoxTitle from '../common/BoxTitle';
import TextComponent from '../common/TextComponent';
import styles from './styles';
import DropdownComponent from '../common/DropdownComponent';

const DropdownTextBox = ({
  darkMode,
  mainTitle,
  container,
  value,
  onChangeText,
  editable,
  keyboardType,
  data,
  labelField,
  valueField,
  dropDownValue,
  onBlur,
  onFocus,
  onChange,
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
      <DropdownComponent
        data={data}
        labelField={labelField}
        valueField={valueField}
        value={dropDownValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
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
      <DropdownComponent
        data={data}
        labelField={labelField}
        valueField={valueField}
        value={dropDownValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
    </View>
  );
};

export default DropdownTextBox;
