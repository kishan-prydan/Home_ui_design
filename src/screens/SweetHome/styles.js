import {StyleSheet} from 'react-native';
import { moderateScale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: moderateScale(10)
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default styles;
