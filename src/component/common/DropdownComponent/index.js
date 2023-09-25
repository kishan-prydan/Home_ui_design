import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './styles';

const DropdownComponent = ({darkMode, data}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return !!darkMode ? (
    <View style={styles.dropDownContainerDark}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyleDark}
        selectedTextStyle={styles.selectedTextStyleDark}
        inputSearchStyle={styles.inputSearchStyleDark}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  ) : (
    <View style={styles.dropDownContainer}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;
