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
    paddingTop: moderateVerticalScale(20),
  },
  secondBoxStyle: {
    backgroundColor: colors.white,
    height: moderateScale(70),
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(15),
  },
});

export default styles;
