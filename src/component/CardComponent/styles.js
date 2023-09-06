import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: moderateScale(200),
    borderRadius: scale(15),
    elevation: 5,
    marginBottom: moderateVerticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerContainer:{
    alignItems: 'center',
  },
});
