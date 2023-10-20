import {StyleSheet} from 'react-native';
import fontFamily from './fontFamily';
import {textScale} from './responsiveSize';
import colors from '../assets/theme/colors';

export default StyleSheet.create({
  fontSize10: {
    fontSize: textScale(10),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontSize12: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontSize14: {
    fontSize: textScale(14),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontSize16: {
    fontSize: textScale(16),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontSize18: {
    fontSize: textScale(18),
    fontFamily: fontFamily.bold,
    color: colors.themeColor,
  },
  fontSize20: {
    fontSize: textScale(20),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontSize24: {
    fontSize: textScale(24),
    color: colors.white,
    fontFamily: fontFamily.medium,
    textTransform: 'uppercase',
  },
});
