import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import { moderateScale, scale, moderateVerticalScale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  musicMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    paddingVertical: moderateVerticalScale(10),
  },
  musicInnerContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    borderWidth: 0,
    height: moderateScale(36),
    width: moderateScale(36),
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  firstTextStyle: {
    fontSize: scale(12),
    fontWeight: 600,
  },
  secondTextStyle: {
    fontSize: scale(10),
    fontWeight: 600,
    color: colors.inActive,
  },
  musicTextContainer: {
    paddingLeft: moderateScale(10),
  },
  timeContainer: {
    paddingTop: moderateVerticalScale(20),
  },
});

export default styles;
