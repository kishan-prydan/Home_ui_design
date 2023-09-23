import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {},
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(20),
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
});

export default styles;
