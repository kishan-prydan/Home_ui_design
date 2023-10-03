import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageView: {
    paddingTop: moderateVerticalScale(20),
    alignItems: 'center',
  },

  innerViewStyle: {},

  savebuttonContainer: {
    paddingBottom: moderateScale(20),
  },

  saveButton: {
    borderRadius: moderateScale(25),
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
    elevation: 10,
  },
  textStyle: {
    fontSize: scale(16),
    color: colors.themeColor,
    fontWeight: 'bold',
    paddingTop: moderateVerticalScale(10),
  },
});
