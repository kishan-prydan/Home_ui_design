
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
  boxTitleContainer: {
    marginTop: moderateVerticalScale(5),
  },
  secondBoxstyle:{
    backgroundColor: colors.textBoxOpacity,
    borderRadius: 5,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(20),
  },
  lightBoxContainer:{
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.white,
    width: '50%',
  },
});

export default styles;
