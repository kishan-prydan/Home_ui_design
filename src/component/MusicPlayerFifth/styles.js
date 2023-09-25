import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(490),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconFirstContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
	paddingVertical: moderateVerticalScale(25)
  },
  iconSecondContainer: {
    flex: 1,
  },
  sliderContainer: {
    alignItems: 'center',
    paddingRight: moderateScale(10),
  },
  sliderStyle: {
    height: moderateScale(190),
  },
  musicControllerContainer: {
  },
  iconContainer: {
    paddingTop: moderateVerticalScale(20),
    paddingBottom: moderateScale(10),
  },
  secondSliderContainer: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateVerticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondSliderStyle: {
    width: moderateScale(220),
  },
  textStyle: {
    paddingLeft: moderateScale(10),
    color: colors.themeColor,
    paddingBottom: moderateScale(1),
  },
});

export default styles;
