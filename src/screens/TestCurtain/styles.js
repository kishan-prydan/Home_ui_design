

import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale, scale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.headerOpacity,
  },
  secondHeaderView: {
    paddingVertical: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(20),
  },
  boxTitleContainer: {
    marginTop: moderateVerticalScale(5),
  },
  checkBoxStyle: {
    flexDirection: 'row',
    paddingVertical: moderateVerticalScale(20),
  },
  boxTitileinnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateVerticalScale(10),
  },
  checkBoxInnerStyle:{
    color: colors.white, 
    fontWeight: 600
  },
  OnOffIconView:{
    paddingVertical: moderateVerticalScale(10),
  },
  customButtonContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
    paddingTop: moderateVerticalScale(15),
  },
  customButtonSecondContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: moderateVerticalScale(15),
  },
  customButtonStyle:{
    backgroundColor: colors.white,
    borderRadius: 25,
    width: '45%',
  },
});

export default styles;
