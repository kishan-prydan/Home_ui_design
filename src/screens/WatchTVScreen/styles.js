import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.headerOpacity,
  },
  mianViewStyle: {
    backgroundColor: colors.boxBackgroundOpacity,
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
});

export default styles;
