import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox} from '@rneui/themed';
import TextComponent from '../TextComponent';
import colors from '../../../assets/theme/colors';

const CheckBoxComponent = ({whiteColor}) => {
  const [check1, setCheck1] = useState(false);

  return (
    <View style={styles.container}>
      <TextComponent title={'Allow Control Main Screen '} />
      <CheckBox
        center
        checked={check1}
        onPress={() => setCheck1(!check1)}
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
