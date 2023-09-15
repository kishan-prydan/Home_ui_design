import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {
  moderateScale,
  scale,
  moderateVerticalScale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  slider: {
    width: moderateScale(200),
  },
  trackStyle: {
    height: moderateScale(10),
    backgroundColor: 'transparent',
    borderRadius: scale(20),
  },
  thumbStyle: {
    height: moderateScale(28),
    width: moderateScale(28),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: colors.primary,
    paddingTop: moderateVerticalScale(3),
  },
  titleTextStyle: {
    fontSize: scale(15),
    color: colors.grey,
    paddingBottom: moderateVerticalScale(3),
  },
});

export default styles;
