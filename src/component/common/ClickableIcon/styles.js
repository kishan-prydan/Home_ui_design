import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: 35,
    borderWidth: 3,
    borderColor: colors.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    elevation: 15,
    shadowColor: colors.green,
    shadowOffset: {width: 0, height: 20},
  },
  secondContainer: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: 35,
    borderWidth: 3,
    borderColor: colors.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
  }
});

export default styles;
