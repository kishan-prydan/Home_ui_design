//import liraries
import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
    borderRadius: 25,
  },
  textStyle: {
    color: colors.white,
  },
});

export default styles;
