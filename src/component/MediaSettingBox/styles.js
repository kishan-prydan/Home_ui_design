//import liraries
import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  boxContainerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  textView: {
    flexDirection: 'row',
    paddingLeft: moderateScale(10),
  },
  textStyleOne: {
    textTransform: 'uppercase',
    color: colors.white,
	fontSize: 16,
	fontWeight: 600,
  },
  textStyleTwo: {
    color: colors.white,
    paddingLeft: moderateScale(6),
	fontSize: 16,
	fontWeight: 600,
  },
});

export default styles;
