import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import commonStyles from '../../../styles/commonStyles';
import {
  moderateScale,
  moderateVerticalScale,
} from '../../../styles/responsiveSize';

export default StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    minHeight: moderateScale(48),
    paddingTop: moderateVerticalScale(30),
    paddingBottom: moderateVerticalScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textView: {
    ...commonStyles.fontSize18,
    fontWeight: 'bold',
  },

  imgView: {
    color: colors.header,
    height: moderateScale(25),
    width: moderateScale(25),
  },

  iconContainer: {
    flexDirection: 'row',
  },
});
