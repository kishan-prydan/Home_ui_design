import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(490),
  },
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(20),
  },
  secondHeaderViewStyle: {
    justifyContent: 'flex-start',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: moderateScale(340),
    overflow: 'hidden',
  },
  sliderStyle: {
    height: moderateScale(240),
  },
  musicControllerContainer:{
    paddingTop: moderateVerticalScale(10),
  },
});

export default styles;
