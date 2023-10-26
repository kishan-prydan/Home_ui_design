import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from '../../styles/responsiveSize';

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
    marginRight: moderateScale(5),
  },
  sliderStyle: {
    height: moderateScale(240),
  },
  musicControllerContainer: {
    paddingTop: moderateVerticalScale(18),
  },
});

export default styles;
