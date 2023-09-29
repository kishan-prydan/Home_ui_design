
import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale, scale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.headerOpacity,
  },
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(30),
    paddingHorizontal: moderateScale(20),
  },
  boxTitleContainer: {
    marginTop: moderateVerticalScale(5),
  },
  boxTitileinnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateVerticalScale(10),
  },
  boxTimeinnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateVerticalScale(10),
	// backgroundColor: 'plum'
  },
  checkBoxStyle: {
    // paddingVertical: moderateVerticalScale(5),
  },
  checkBoxTextStyle:{
	color: colors.white,
	fontSize: scale(18),
  },
});

export default styles;
