import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: moderateVerticalScale(55),
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
  },
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(40),
  },
});

export default styles;
