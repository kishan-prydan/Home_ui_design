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
    paddingVertical: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(40),
  },
  circleViewStyle: {
    backgroundColor: colors.themeColor,
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  boxContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 15,
  },
  boxContainerInnerStyle:{
    paddingLeft: 15,
  },
  textStyle:{
    color: colors.white,
    fontWeight: 600
  },
  customButtonStyle: {
    backgroundColor: colors.lightGrey,
    width: 55,
    height: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 5,
  },
});

export default styles;
