import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  musicMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    paddingLeft: 20,
    paddingVertical: 10,
  },
  musicInnerContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  iconContainer: {
    borderWidth: 0,
    height: 36,
    width: 36,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  firstTextStyle: {
    fontSize: 13,
    fontWeight: 600,
  },
  secondTextStyle: {
    fontSize: 11,
    fontWeight: 600,
    color: colors.inActive,
  },
  musicTextContainer: {
    paddingLeft: 10,
  },
  timeContainer: {
    paddingTop: 20,
  },
});

export default styles;
