//import liraries
import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.headerOpacity,
  },
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(40),
  },
  boxContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  boxContainerFirstStyle: {
    flex: 4,
    alignItems: 'center',
  },
  boxContainerSecondStyle: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  customButtonStyle: {
    borderRadius: 25,
  },
});

export default styles;
