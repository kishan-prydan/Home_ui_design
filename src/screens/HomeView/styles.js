import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  backgroudImageContainer: {
    paddingVertical: moderateVerticalScale(30),

  },
  iconView:{
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: moderateVerticalScale(40),
    right: moderateScale(20),
  },
  warningMessage:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
