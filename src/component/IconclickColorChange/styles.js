import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
	container: {
	  justifyContent: 'center',
	  alignItems: 'center',
	  paddingVertical: 10,
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  width: '50%',
	  paddingLeft: 20,
	},
	iconFirstContainer: {
	  borderWidth: 0,
	  height: 26,
	  width: 26,
	  borderRadius: 13,
	},
	iconSecondContainer: {
	  borderWidth: 0,
	  height: 36,
	  width: 36,
	  borderRadius: 18,
	},
	iconThirdContainer: {
	  borderWidth: 0,
	  height: 46,
	  width: 46,
	  borderRadius: 23,
	},
	iconStyle: {
	  color: colors.white,
	},
  });

  export default styles;