import { StyleSheet } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: moderateVerticalScale(10),
		flexDirection: 'row',
		justifyContent: 'space-between',
	  },
	  firstIconStyle:{
		borderWidth: 0,
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: 'transparent',
		zIndex: 0,
	  },
	  iconSecondContainer: {
		borderWidth: 0,
		height: 40,
		width: 40,
		borderRadius: 20,
		borderWidth: 0,
		borderColor: 'transparent',
		backgroundColor: 'transparent',
	  },
	  effect:{
		elevation: 20,
		zIndex: 1,
	  },
});

export default styles;