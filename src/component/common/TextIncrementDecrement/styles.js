import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainer: {
    borderWidth: 0,
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: 12,
    backgroundColor: colors.themeColor,
  },
  disabledContainer: {
    borderWidth: 0,
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: 12,
    backgroundColor: colors.inActive,
  },
  iconStyle: {
    color: colors.white,
  },
  textStyle: {
    color: colors.primary,
    paddingHorizontal: moderateScale(15),
  },
});

export default styles;
