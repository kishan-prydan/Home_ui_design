import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateVerticalScale(10),
  },
  textStyle: {
    color: colors.primary,
  },
  darkTextStyle:{
	color: colors.white,
  },
  darkBoxTextStyle:{
	color: colors.white,
	fontWeight: 'normal',
  },
  boxContainer:{
	backgroundColor: colors.textBoxOpacity,
	elevation: 0
  },
});

export default styles;
