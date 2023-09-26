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
  PressableTitleContainer: {
    flexDirection: 'row',
  },
  PressableTitleInnerContaner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperContainer: {
    paddingRight: 10,
  },
  textStyle: {
    color: colors.white,
    fontWeight: 600,
  },
  PressableIconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.white,
  },
});

export default styles;
