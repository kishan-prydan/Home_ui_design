import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale, scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iocnStyle: {
    height: moderateScale(70),
    width: moderateScale(70),
    margin: moderateScale(5),
  },
  circleButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle:{
    fontSize: scale(16),
    paddingRight: moderateScale(3),
  },
});

export default styles;
