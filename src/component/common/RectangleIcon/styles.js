import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(35),
    width: moderateScale(35),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.themeColor,
    elevation: 15,
    shadowColor: colors.green,
    shadowOffset: {width: 0, height: 35},
  },
  secondContainer: {
    height: moderateScale(35),
    width: moderateScale(35),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.themeColor,
  },
  iconStyle:{
    color: colors.white,
  },
});

export default styles;
