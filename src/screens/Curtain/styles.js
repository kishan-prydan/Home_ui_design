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
    paddingVertical: moderateVerticalScale(20),
  },
  boxTitleContainer: {
    marginTop: moderateVerticalScale(5),
  },
  checkBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(10),
    // backgroundColor: 'plum',
  },
  boxTitileinnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateVerticalScale(10),
  },
});

export default styles;
