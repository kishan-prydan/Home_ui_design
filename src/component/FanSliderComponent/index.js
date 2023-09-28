import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextComponent from '../common/TextComponent';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const FanSliderComponent = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineTextView}>
        <TextComponent title={title} textStyle={styles.lineTextStyle} />
        <View style={styles.lineView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'purple',
	// flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
  },
  lineTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 6,
	// backgroundColor: 'red',
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
