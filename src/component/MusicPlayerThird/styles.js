import {StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
	container: {
		height: moderateScale(490),
	},
	firstViewStyle:{
		flex: 5,
	},
	secondViewStyle:{
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: moderateScale(20)
	},
	thirdIconContainer: {
		borderWidth: 0,
		height: moderateScale(52),
		width: moderateScale(52),
		borderRadius: 26,
		backgroundColor: colors.themeColor,
		shadowColor: colors.themeColor,
		shadowOffset: {width: 0, height: 20},
		marginRight: moderateScale(20)
	  },
	  sliderStyle:{
		width: 180,
	  },
});

export default styles;
