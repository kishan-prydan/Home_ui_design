//import liraries
import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.headerOpacity,
  },
  mainViewContainer: {
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateVerticalScale(20),
    paddingBottom: moderateVerticalScale(5),
  },
});

export default styles;
