import {StyleSheet} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(115),
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: moderateVerticalScale(15),
  },
  textView:{
	width: '20%',
  paddingLeft: moderateScale(12),
	justifyContent: 'center',
  },
  viewContainer: {
	width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    textTransform: 'uppercase',
    color: colors.grey,
    fontSize: scale(14),
    fontWeight: 500,
  },
  rangeSiderStyle: {
    width: moderateScale(150),
  },
});

export default styles;
