import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {moderateScale, scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconColor: {
    color: colors.themeColor,
  },
  textStyle: {
    fontSize: scale(18),
    fontWeight: 'bold',
  },
  iconContainer: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: 15,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    marginRight: moderateScale(24),
  },
  clickableIconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginView: {
	marginLeft: moderateScale(5),
  fontSize: scale(16),
  fontWeight: 'bold',
  },
});

export default styles;
