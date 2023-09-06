import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imageView: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },

  // innerButton: {
  //   width: 180,
  //   height: 50,
  //   borderRadius: 10,
  // },

  savebuttonContainer: {
    padding: moderateScale(20),
    width: '100%',
  },

  saveButton: {
    borderRadius: moderateScale(25),
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
    elevation: 10,
  },
});
