import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    paddingBottom: moderateVerticalScale(20),
  },
  cardMainView: {
    backgroundColor: colors.textBoxOpacity,
    height: moderateScale(95),
    width: moderateScale(95),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInnerView: {
    backgroundColor: colors.iconBackgroundColor,
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.white,
    paddingTop: moderateVerticalScale(8),
    fontWeight: 500,
    fontSize: scale(14),
    textTransform: 'uppercase',
  },
});

export default styles;
