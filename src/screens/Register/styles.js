import {StyleSheet} from 'react-native';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    height: moderateScale(390),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mainStyle: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'relative',
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
