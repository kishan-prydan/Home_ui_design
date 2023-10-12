import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'aqua',
  },

  innerContainer: {
    flex: 1,
    // backgroundColor: 'midnightblue',
    alignItems: 'center',
    paddingTop: moderateVerticalScale(20),
  },

  contentContainer: {
    // flexGrow: 1,
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'plum',
  },

  buttonViewContainer:{
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },

  buttonStyle: {
    width:100,
    height: 35,
    borderRadius: 5,
  },

  textStyle:{
    fontSize: 12,
    fontWeight: 600,
    color: 'purple',
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
