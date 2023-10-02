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
  secondHeaderView: {
    paddingTop: moderateVerticalScale(20),
    paddingBottom: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(40),
  },
  circleViewStyle: {
    backgroundColor: colors.themeColor,
    height: moderateScale(64),
    width: moderateScale(64),
    borderRadius: 32,
  },
  boxContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: moderateScale(15),
  },
  boxContainerInnerStyle:{
    paddingLeft: moderateScale(15),
  },
  textStyle:{
    color: colors.white,
    fontWeight: 600
  },
  customButtonStyle: {
    backgroundColor: colors.lightGrey,
    width: moderateScale(55),
    height: moderateScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: moderateVerticalScale(5),
  },
});

export default styles;
