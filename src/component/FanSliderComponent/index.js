import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import TextComponent from '../common/TextComponent';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const FanSliderComponent = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.lineTextView} activeOpacity={0.9} onPress={onPress}>
        <TextComponent title={title} textStyle={styles.lineTextStyle} />
        <View style={styles.lineView} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 6,
    flex: 1,
  },
  lineTextStyle: {
    fontSize: 9,
    color: colors.white,
    paddingBottom: moderateVerticalScale(4),
  },
  lineView: {
    width: moderateScale(5),
    height: moderateScale(12),
    borderRadius: 4,
    backgroundColor: colors.themeColor,
  },
});

export default FanSliderComponent;
