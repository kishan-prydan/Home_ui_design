import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import { moderateScale, scale, moderateVerticalScale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyleView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height:moderateScale(430),
    width: '100%',
    resizeMode: 'cover',
  },
  mainStyle: {
    backgroundColor: colors.white,
    flex: 1,
  },
  innerMainView: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: moderateScale(20),
    position: 'fixed',
    bottom: 20,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  innerStyle: {
    paddingTop: moderateVerticalScale(50),
  },
  forgotView: {
    alignSelf: 'flex-end',
    marginVertical: moderateVerticalScale(14),
  },
  forgotText: {
    fontSize: scale(14),
    color: colors.blue,
    fontWeight: '400',
  },
  loginButtonContainer: {
    width: '100%',
    paddingTop: 15,
  },
  loginButton: {
    borderRadius: moderateScale(25),
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
    // elevation: 10,
  },
  errorText:{
    marginBottom: moderateVerticalScale(1),
    color: 'red',
    paddingLeft: moderateScale(4),
    paddingTop: moderateVerticalScale(4),
    fontSize: 12,
  },
});

export default styles;
