import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: colors.white,
    borderRadius: scale(20),
    marginBottom: scale(20),
    overflow: 'hidden',
    height: moderateScale(200),
    elevation: 5,
  },

  image: {
    position: 'relative',
    height: moderateScale(200),
    elevation: 5,
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  textView: {
    fontSize: scale(16),
    color: colors.white,
    fontWeight: 'bold',
    paddingLeft: moderateScale(15),
  },

  content: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(25),
    bottom: 0,
    paddingBottom: moderateVerticalScale(8),
  },

  iconContainer: {
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: scale(16),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.iconBackgroundColor,
    position: 'absolute',
    right: 0,
    elevation: 7,
    marginRight: 7,
    marginTop: 7,
  },

  EditButtonIcon:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
