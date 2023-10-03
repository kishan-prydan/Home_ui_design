import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.headerOpacity,
  },
  mianDisplayView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: moderateVerticalScale(20),
  },
  contentContainer: {
    width: '100%',
  },
});

export default styles;
