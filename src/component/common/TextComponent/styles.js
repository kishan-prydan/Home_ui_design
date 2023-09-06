import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper:{
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',

  },
  textMain: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
