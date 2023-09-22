import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: moderateVerticalScale(5),
    borderRadius: 5,
  },
  boxTitleStyle: {
    paddingTop: moderateVerticalScale(10),
    alignSelf: 'flex-start',
    paddingLeft: moderateScale(12),
  },
  textComponent: {
    color: colors.primary,
    fontWeight: 'bold',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(6),
  },
  textContainer: {
    backgroundColor: colors.iconBackgroundColor,
    elevation: 0,
  },
  buttonText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  sliderStyle: {
    alignItems: 'center',
    paddingBottom: moderateVerticalScale(20),
  },
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateVerticalScale(20),
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(20)
  },
  boxStyle: {
    backgroundColor: colors.cardColorThree,
  },
  iconStyle:{
    color: colors.cardIconColorThree,
  },
  fanIconBoxTitleStyle:{
    flexDirection: 'row',
    paddingTop: moderateVerticalScale(10),
    paddingBottom: moderateVerticalScale(25)
  },
  boxTitleContainer:{
    width: 'auto',
    elevation: 0,
    backgroundColor: colors.cardColorFive,
    marginLeft: moderateScale(20),
  },
  boxTitleTextStyle:{
    padding: moderateScale(20),
    color: colors.primary,
    fontWeight: 700,
  },
});

export default styles;
