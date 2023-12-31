import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: moderateVerticalScale(55),
  },
  componentContainer: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
  },
  sliderView: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(20),
    flex: 1,
  },
  secondHeaderView: {
    paddingTop: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(40),
  },
  circleIcon: {
    height: 64,
    width: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableIconStyle:{
    paddingBottom: moderateVerticalScale(20),
  },
});

export default styles;
