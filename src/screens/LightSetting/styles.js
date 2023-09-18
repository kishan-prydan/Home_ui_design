import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
  },
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(20),
  },
  boxTitleContainer: {
    paddingHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(20),
  },
  pressableIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),    
    paddingVertical: moderateVerticalScale(20),
  },
  checkBoxStyle:{
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(10),
  },
});

export default styles;
