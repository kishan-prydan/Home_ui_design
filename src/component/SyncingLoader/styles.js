import {StyleSheet} from 'react-native';
import { moderateVerticalScale } from '../../styles/responsiveSize';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: colors.themeColor,
	},
	mainViewStyle: {
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	textContainer: {
	  paddingVertical: moderateVerticalScale(5),
	},
	textStyle: {
	  color: colors.white,
	},
  });
  
  export default styles;