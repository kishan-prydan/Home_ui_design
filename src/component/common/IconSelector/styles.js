import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../assets/theme/colors";
const window = Dimensions.get('window');

const styles = StyleSheet.create({
	modalContainer: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: 'rgba(0, 0, 0, 0.7)',
	},
	modalContent: {
	  width: '80%',
	  backgroundColor: 'white',
	  borderRadius: 5,
	  padding: 20,
	},
	scrollView: {
	  maxHeight: window.height * 0.5,
	},
	iconContainer: {
	  flexDirection: 'row',
	  flexWrap: 'wrap',
	  justifyContent: 'center',
	  alignItems: 'center', 
	},
	iconWrapper: {
	  alignItems: 'center',
	  justifyContent: 'center',
	  margin: 10,
	  borderWidth: 1,
	  borderColor: 'black',
	  height: 40,
	  width: 40,
	},
	selectedIcon: {
	  backgroundColor: colors.themeColor,
	},
	closeButton: {
	  marginTop: 20,
	  alignItems: 'center',
	  width: '100%',
	},
	textStyle: {
	  color: colors.white,
	  backgroundColor: colors.themeColor,
	  fontSize: 14,
	  fontWeight: 'bold',
	  borderRadius: 5,
	  paddingVertical: 8,
	  paddingHorizontal: 10,
	},
  });

  export default styles;