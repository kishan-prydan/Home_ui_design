import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '55%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.themeColor,
  },
});

export default styles;
