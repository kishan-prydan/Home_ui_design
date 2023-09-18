import {StyleSheet} from 'react-native'
import colors from '../../assets/theme/colors';
import { moderateVerticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: moderateVerticalScale(10)
	},
	textStyle:{
		color: colors.primary
	}
});

export default styles;