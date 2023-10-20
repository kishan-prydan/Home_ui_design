import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import { scale, moderateVerticalScale, moderateScale } from '../../styles/responsiveSize';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: moderateVerticalScale(20),
  },

  contentContainer: {
    alignItems: 'center',
    width: '100%',
  },

  //button view color style

  buttonContainer: {
    padding: moderateScale(20),
  },

  innerButton: {
    borderRadius: scale(25),
    elevation: 10,
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: moderateScale(0),
      height: moderateScale(10),
    },
    shadowOpacity: 10,
  },
});
