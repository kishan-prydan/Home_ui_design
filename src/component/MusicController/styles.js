import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingHorizontal: 30,
	paddingBottom: 40
  },
  firstIconContainer: {
    borderWidth: 0,
    backgroundColor: colors.themeColor,
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  secondIconContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    height: 24,
    width: 'auto',
  },
  thirdIconContainer: {
    borderWidth: 0,
	height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.themeColor,
    shadowColor: colors.themeColor,
    shadowOffset: {width: 0, height: 20},
  },
  forthIconContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    height: 24,
    width: 'auto',
  },
  fifthIconContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    height: 24,
    width: 'auto',
  },
});

export default styles;
