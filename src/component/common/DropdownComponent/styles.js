import {StyleSheet} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  dropDownContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '55%',
  },
  dropDownContainerDark: {
    backgroundColor: colors.textBoxOpacity,
    borderRadius: 5,
    width: '55%',
  },
  dropdown: {
    borderColor: 'transparent',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(12),
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: moderateVerticalScale(8),
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: scale(14),
  },
  placeholderStyle: {
    fontSize: scale(16),
    color: colors.themeColor,
  },
  placeholderStyleDark: {
    fontSize: scale(16),
    color: colors.white,
    fontWeight: 600,
  },
  selectedTextStyle: {
    fontSize: scale(16),
    color: colors.themeColor,
  },
  selectedTextStyleDark: {
    fontSize: scale(16),
    color: colors.white,
    fontWeight: 600,
  },
  inputSearchStyle: {
    height: moderateScale(40),
    fontSize: scale(16),
    color: colors.themeColor,
  },
  inputSearchStyleDark: {
    height: moderateScale(40),
    fontSize: scale(16),
    color: colors.white,
  },
});

export default styles;
