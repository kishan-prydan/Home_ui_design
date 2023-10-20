import {StyleSheet} from 'react-native';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from '../../styles/responsiveSize';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    width: '100%',
    height: moderateScale(401),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imgStyleForgotPassword: {
    width: '100%',
    height: moderateScale(550),
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 2.4,
  },
  mainStyle: {
    backgroundColor: colors.white,
    flex: 1,
  },
  mainStyleForgotPassword: {
    // flex: 1,
    backgroundColor: colors.white,
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
  innerMainViewForgotPassword: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: moderateScale(20),
    bottom: 20,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    justifyContent: 'space-between',
  },
  innerStyle: {
    paddingTop: moderateVerticalScale(10),
  },
  innerStyleForgotPassword: {
    paddingTop: moderateVerticalScale(50),
  },
  forgotView: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: scale(14),
    color: colors.blue,
    fontWeight: '400',
  },
  loginButtonContainer: {
    width: '100%',
    paddingTop: 15,
    paddingTop: moderateVerticalScale(50),
  },
  loginButton: {
    borderRadius: moderateScale(25),
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
  },
  errorText: {
    marginBottom: moderateVerticalScale(1),
    color: 'red',
    paddingLeft: moderateScale(4),
    paddingTop: moderateVerticalScale(4),
    fontSize: 12,
  },

  otpMainContainer: {
    paddingTop: moderateVerticalScale(20),
  },

  header: {
    paddingVertical: moderateVerticalScale(10),
    fontSize: scale(14),
    color: colors.blackOpacity50,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateVerticalScale(8),
    marginBottom: moderateVerticalScale(4),
  },

  //use this code to make box

  otpInputContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
  },

  otpInput: {
    height: 40,
    textAlign: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: colors.borderColor,
  },
});

export default styles;
