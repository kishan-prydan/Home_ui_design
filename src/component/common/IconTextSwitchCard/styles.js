import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	container: {
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	innerStyle: {
	  backgroundColor: 'pink',
	  borderRadius: 10,
	  padding: moderateScale(5),
	  alignItems: 'center',
	  paddingBottom: moderateVerticalScale(1),
	},
	iconView:{
	  backgroundColor: colors.white,
	  alignItems: 'center',
	  justifyContent: 'center',
	  borderRadius: 10,
	  height: moderateScale(30),
	  width: moderateScale(30),
	  marginTop: moderateVerticalScale(2)
	},
	textStyle:{
	  paddingTop: moderateVerticalScale(10),
	},
	textComponentStyle:{
	  color: colors.primary,
	  fontWeight: 600,
	  fontSize: scale(12),
	},
	elevatedContainer: {
		elevation: 10,
	  },
  });

  export default styles;