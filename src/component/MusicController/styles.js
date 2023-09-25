import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(30),
  },
  firstIconContainer: {
    borderWidth: 0,
    backgroundColor: colors.themeColor,
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: 12,
  },
  secondIconContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    height: moderateScale(24),
    width: 'auto',
  },
  thirdIconContainer: {
    borderWidth: 0,
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: 30,
    backgroundColor: colors.themeColor,
    shadowColor: colors.themeColor,
    shadowOffset: {width: 0, height: 20},
  },
  forthIconContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    height: moderateScale(24),
    width: 'auto',
  },
  fifthIconContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    height: 24,
    width: 'auto',
  },
});

export default styles;
