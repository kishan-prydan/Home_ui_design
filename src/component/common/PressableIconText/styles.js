import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';


const styles = StyleSheet.create({
	container: {
	//   paddingHorizontal: moderateScale(20),
	},
	innerView: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  backgroundColor: 'white',
	  justifyContent: 'space-between',
	  height: moderateScale(110),
	  width: '100%',
	  borderRadius: 5,
	  paddingHorizontal: moderateScale(15),
	},
	circleTextView: {
	  flexDirection: 'row',
	  alignItems: 'center',
	},
	circleStyle: {
	  height: moderateScale(70),
	  width: moderateScale(70),
	  borderRadius: 35,
	},
	titleView: {
	  paddingLeft: moderateScale(20),
	},
  });

  export default styles;