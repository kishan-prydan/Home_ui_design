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
    bottom: 40,
    right: 20,
  },
});

export default styles;
