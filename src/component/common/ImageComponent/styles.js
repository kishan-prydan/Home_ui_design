import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export default StyleSheet.create({
  ImageView: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderTopLeftRadius: moderateVerticalScale(15),
    borderTopRightRadius: moderateVerticalScale(15),
    position: 'relative',
  },

  IconView: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: 15,
    backgroundColor: colors.iconBackgroundColor,
    position: 'absolute',
    right: 0,
    elevation: 7,
    marginRight: moderateScale(7),
    marginTop: moderateVerticalScale(7),
  },

  EditButtonIcon:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
