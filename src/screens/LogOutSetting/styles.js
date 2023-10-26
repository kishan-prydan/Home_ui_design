import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  buttonStyle: {
    width: moderateScale(100),
    height: moderateScale(35),
    borderRadius: 5,
    marginTop: moderateVerticalScale(10),
  },
  syncButtonStyle: {
    width: moderateScale(120),
    height: moderateScale(38),
    borderRadius: 5,
    marginTop: moderateVerticalScale(20),
  },

  textStyle: {
    fontSize: scale(16),
    fontWeight: 600,
  },
  deviceView: {
    flexDirection: 'row',
    paddingBottom: moderateVerticalScale(10),
  },
  deviceViewTextStyle: {
    color: colors.danger,
    paddingLeft: moderateScale(10),
  },
});

export default styles;
