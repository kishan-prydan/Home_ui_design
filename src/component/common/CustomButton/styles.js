import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import { moderateVerticalScale, moderateScale } from '../../../styles/responsiveSize';

export default StyleSheet.create({
  wrapper: {
    height: moderateScale(42),

    paddingHorizontal: moderateScale(5),

    marginVertical: moderateVerticalScale(5),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loaderSection: {
    flexDirection: 'row',
  },
});
