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
    paddingHorizontal: moderateScale(20),    
  },
  boxTitleContainer: {
    marginTop: moderateVerticalScale(20),
  },
  pressableIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateVerticalScale(20),
  },
  checkBoxStyle: {
    paddingVertical: moderateVerticalScale(10),
  },
});

export default styles;
