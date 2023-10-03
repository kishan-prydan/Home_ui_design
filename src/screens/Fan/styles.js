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
    paddingTop: moderateVerticalScale(20),
    paddingBottom: moderateVerticalScale(5),
    paddingHorizontal: moderateScale(40),
  },
  boxContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circleViewStyle: {
    backgroundColor: colors.themeColor,
    height: moderateScale(64),
    width: moderateScale(64),
    borderRadius: 32,
  },
  boxContainerInnerStyle: {
    paddingHorizontal: moderateScale(15),
  },
  lineView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: colors.white,
    fontWeight: 600,
  },
  sliderStyle: {
    width: moderateScale(150),
    height: moderateScale(30),
  },
  trackStyle: {
    width: moderateScale(150),
    borderWidth: 1,
    borderColor: colors.sliderColor,
    height: moderateScale(12),
    borderRadius: 25,
  },
  thumbStyle: {
    height: moderateScale(20),
    width: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineNumberView: {
    width: moderateScale(150),
    height: moderateScale(20),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(5),
  },
});

export default styles;
