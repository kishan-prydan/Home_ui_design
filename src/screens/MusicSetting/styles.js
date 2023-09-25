import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
  },
  boxTitleContainer: {
	  flex: 1,
	  justifyContent: 'space-between',
	  marginTop: moderateVerticalScale(10),
},
  lightSettingBoxComponentContainer: {
    elevation: 0,
  },
  lightSettingStyle:{
	// backgroundColor: 'purple',
  },
  customButtonContainer: {
    width: '100%',
	marginBottom: moderateVerticalScale(30),
  paddingHorizontal: moderateScale(20),
},
  customButtonStyle: {
    borderRadius: moderateScale(25),
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
    elevation: 10,
  },
});

export default styles;
