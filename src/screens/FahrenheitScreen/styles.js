import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
  },
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(20),
  },
  secondBoxStyle: {
    marginHorizontal: moderateScale(20),
    backgroundColor: colors.white,
    height: moderateScale(80),
    borderRadius: 5,
    justifyContent: 'center',
  },
});

export default styles;
