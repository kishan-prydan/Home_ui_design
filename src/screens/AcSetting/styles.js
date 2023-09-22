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
  secondHeaderView: {
    paddingTop: moderateScale(40),
  },
  boxTitleContainer: {
    marginTop: moderateVerticalScale(20),
  },
  boxTitileinnerContainer:{
    flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: moderateVerticalScale(10)
  },
  textStyle:{
		color: colors.primary
	},
});

export default styles;
