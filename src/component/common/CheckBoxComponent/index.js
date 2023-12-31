import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox} from '@rneui/themed';
import TextComponent from '../TextComponent';
import colors from '../../../assets/theme/colors';

const CheckBoxComponent = ({
  checkBoxLeft,
  whiteColor,
  title,
  checked,
  textStyle,
  onPress,
  container
}) => {
  const [check1, setCheck1] = useState(false);

  const handleCheck = () => {
    setCheck1(!check1);
  };

  return !!checkBoxLeft ? (
    <View style={{...styles.container, ...container}}>
      <CheckBox
        center
        checked={checked}
        onPress={onPress}
        containerStyle={{backgroundColor: 'transparent', padding: 0, margin: 0, }}
        uncheckedColor={!!whiteColor ? colors.white : colors.themeColor}
        checkedColor={!!whiteColor ? colors.white : colors.themeColor}
        
      />
      <TextComponent title={title} textStyle={textStyle} />
    </View>
  ) : (
    <View style={styles.container}>
      <TextComponent title={title} textStyle={textStyle}/>
      <CheckBox
        center
        checked={check1}
        onPress={() => handleCheck()}
        wrapperStyle={{color: 'white'}}
        containerStyle={{backgroundColor: 'transparent'}}
        uncheckedColor={!!whiteColor ? colors.white : colors.themeColor}
        checkedColor={!!whiteColor ? colors.white : colors.themeColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBoxComponent;
