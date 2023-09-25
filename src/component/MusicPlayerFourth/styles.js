
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';


const styles = StyleSheet.create({
	container: {
		height: moderateScale(490),
	},
	innerContainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
