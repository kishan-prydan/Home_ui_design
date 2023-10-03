import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  backgroudImageContainer: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(25),
  },
  iconView:{
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: moderateVerticalScale(40),
    right: moderateScale(20),
  },
});

export default styles;
