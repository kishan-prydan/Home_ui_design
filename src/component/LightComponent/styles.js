import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale, scale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  sliderView: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateVerticalScale(20),
  },
  innerSliderView: {
    height: moderateScale(115),
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  SwitchInnerSliderView: {
    height: moderateScale(115),
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(15),
  },
  circleWithIcon: {
    backgroundColor: 'pink',
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: 35,
  },
  switchWrapper: {
    borderWidth: 4,
    borderRadius: 30,
    borderColor: colors.themeColor,
    height: 25,
    width: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchView: {
    alignItems: 'flex-start',
    position: 'absolute',
    left: '35%',
  },
  titleTextStyle: {
    fontSize: scale(15),
    color: colors.grey,
    paddingBottom: moderateVerticalScale(10),
  },
  switch: {
    transform: [{ scale: 0.6 }],
  },
});

export default styles;
