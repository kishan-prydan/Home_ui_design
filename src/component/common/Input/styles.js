import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
    width: 150,
  },

  inputContainer: {
    paddingVertical: 15,
  },

  textInput: {
    flex: 1,
    width: '100%',
    // color: colors.primary,
    textDecorationLine: 'none',
    fontSize: 14,
    fontWeight: 'bold',
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
