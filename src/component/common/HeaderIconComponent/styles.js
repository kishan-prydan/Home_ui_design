import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
	iconStyle:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	  },
	  iconColor:{
		color: colors.themeColor,
	  },
	  textStyle:{
		fontSize: 18,
		fontWeight: 'bold',
	  },
  });

  export default styles;