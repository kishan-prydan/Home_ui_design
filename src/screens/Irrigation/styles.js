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
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
  },
  textStyle:{
    color: colors.white,
    fontWeight: 600,
	fontSize: 14,
  },
  customButtonStyle: {
    backgroundColor: colors.lightGrey,
    width: moderateScale(55),
    height: moderateScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonOtherContainer:{
    paddingLeft: moderateScale(15),
  },
  customOtherButtonStyle:{
	backgroundColor: colors.themeColor,
    width: '100%',
    height: moderateScale(20),
  },
});

export default styles;
