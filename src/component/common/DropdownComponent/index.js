import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './styles';

const DropdownComponent = ({
  darkMode,
  data,
  value,
  valueField,
  labelField,
  onChange,
  onFocus,
  onBlur,
  mode,
}) => {
  // const [value, setValue] = useState(null);
  // const [isFocus, setIsFocus] = useState(false);

  return !!darkMode ? (
    <View style={styles.dropDownContainerDark}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyleDark}
        selectedTextStyle={styles.selectedTextStyleDark}
        inputSearchStyle={styles.inputSearchStyleDark}
        data={data}
        search
        maxHeight={300}
        labelField={labelField}
        valueField={valueField}
        searchPlaceholder="Search..."
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        mode={mode}
        iconColor={'#FFFFFF'}
      />
    </View>
  ) : (
    <View style={styles.dropDownContainer}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField={labelField}
        valueField={valueField}
        searchPlaceholder="Search..."
        value={value}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        // onChange={item => {
        //   setValue(item.value);
        //   setIsFocus(false);
        // }}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        mode={mode}
        iconColor={'#4A2125'}
      />
    </View>
  );
};

export default DropdownComponent;
