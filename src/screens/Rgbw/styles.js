import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
  },
  sliderView: {
    paddingHorizontal: 20,
    flex: 1,
  },
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(20),
  },
  circleIcon: {
    height: 64,
    width: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;