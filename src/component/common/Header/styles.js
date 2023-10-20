import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import commonStyles from '../../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';

export default StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    minHeight: moderateScale(48),
    paddingTop: moderateScaleVertical(30),
    paddingBottom: moderateScaleVertical(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textView: {
    ...commonStyles.fontSize18,
    fontWeight: 'bold',
  },

  imgView: {
    color: colors.header,
    height: moderateScale(24),
    width: moderateScale(24),
  },

  iconContainer: {
    flexDirection: 'row',
  },
});
