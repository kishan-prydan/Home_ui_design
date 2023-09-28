import { StyleSheet } from "react-native";
import colors from '../../../assets/theme/colors';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		justifyContent: 'center',
		alignItems: 'center',
		width: '55%',
		borderRadius: scale(5),
		elevation: 5,
	},

	textStyle:{
		color: colors.themeColor,
		fontSize: scale(16),
		paddingVertical: moderateVerticalScale(8),
		paddingHorizontal: moderateScale(10),
	},
});

export default styles;