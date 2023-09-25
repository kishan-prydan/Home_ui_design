import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(490),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: moderateVerticalScale(50),
  },
  iconFirstContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: moderateScale(30),
  },
  iconSecondContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  sliderContainer: {
    // paddingRight: moderateScale(10),
  },
  sliderStyle: {
    height: moderateScale(240),
  },
  musicControllerContainer: {
    paddingTop: moderateVerticalScale(18),
  },
});

export default styles;
