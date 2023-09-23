import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

const ShowLessText = ({title, wrapper, textStyle}) => {
  const lessText = title?.slice(0, 28);
  const displayText = title?.length > 28 ? `${lessText}....` : lessText;
  return (
    <View style={{...styles.wrapper, ...wrapper}}>
      <Text style={{...styles.textMain, ...textStyle}}>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textMain: {
    color: colors.themeColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShowLessText;
