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
  mianViewStyle: {
    backgroundColor: colors.boxBackgroundOpacity,
    height: moderateScale(520),
    borderRadius: 20,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: scale(16),
    paddingRight: moderateScale(3),
  },
  lineViewStyle: {
    borderBottomColor: colors.themeColor,
    borderBottomWidth: 1,
    marginVertical: moderateVerticalScale(15),
  },
  buttonStyle:{
    height: 30,
    width: 60,
  },
});

export default styles;
