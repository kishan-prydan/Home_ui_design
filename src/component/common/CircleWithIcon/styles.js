import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	componentStyle: {
	//   flex: 1,
	},
	circleView: {
	  height: moderateScale(50),
	  width: moderateScale(50),
	  borderRadius: 25,
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: 'pink'
	},
	circleViewEffect: {
	  height: moderateScale(50),
	  width: moderateScale(50),
	  borderRadius: 25,
	  elevation: 10,
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  });

  export default styles;
  