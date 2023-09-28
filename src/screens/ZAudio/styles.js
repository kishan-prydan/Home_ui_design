import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
  },
  secondMusicHeaderView: {
    paddingTop: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(20),
  },
  secondBoxStyle: {
    backgroundColor: colors.white,
    borderRadius: 5,
    justifyContent: 'center',
  },
  musicCardContaner:{
    // backgroundColor: 'purple',
  },
});

export default styles;
