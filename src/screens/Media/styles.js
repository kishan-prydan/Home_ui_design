import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.headerOpacity,
  },
  mianDisplayView: {
    flex: 1,
    marginBottom: moderateVerticalScale(56),
  },
});

export default styles;
