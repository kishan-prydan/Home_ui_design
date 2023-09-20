import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(20),
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
  },
  boxMainView: {
    alignItems: 'center',
  },
  boxStyle: {
    elevation: 0,
    width: '60%',
    height: moderateScale(100),
    marginBottom: moderateVerticalScale(15),
  },
  textStyle: {
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  clickableIconView:{
    marginTop: moderateVerticalScale(20),
    marginBottom: moderateVerticalScale(10)
  },
  wrapperView: {
    width: '30%',
  },
  textView: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default styles;
