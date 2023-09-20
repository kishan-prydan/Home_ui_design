import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {moderateScale} from 'react-native-size-matters';

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
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: 20,
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
  },
});

export default styles;
