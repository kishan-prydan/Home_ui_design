import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  backgroudImageContainer: {
    flex: 1,
    // backgroundColor: 'yellow',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(25),
  },
});

export default styles;
