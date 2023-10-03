import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(490),
  },
  mainViewStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontSize: 24,
    color: colors.themeColor,
    fontWeight: 'bold',
  },
});

export default styles;
