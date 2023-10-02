import {StyleSheet} from 'react-native';
import { moderateScale, scale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.headerOpacity,
  },
  mianViewStyle: {
    backgroundColor: colors.boxBackgroundOpacity,
    borderRadius: 20,
    paddingVertical: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(20),
  },
  textStyle:{
    fontSize: scale(16),
    paddingRight: moderateScale(3),
  },
});

export default styles;
