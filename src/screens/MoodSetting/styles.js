import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreView: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.headerOpacity,
  },
  checkBoxInnerStyle: {
    color: colors.white,
    fontWeight: 600,
    fontSize: scale(16),
  },
  checkBoxStyleContainer: {
	flex: 1,
    // backgroundColor: 'yellow',
  },
  checkBoxStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: moderateVerticalScale(20),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: moderateVerticalScale(12),
  },
  customButtonContainer: {
	position: 'absolute',
	bottom: 0,
	width: '100%',
    paddingHorizontal: moderateScale(20),
	// backgroundColor: 'purple',
  },
  customButtonStyle: {
    backgroundColor: colors.white,
    borderRadius: 25,
    marginBottom: moderateVerticalScale(20),
  },
  mainViewStyle: {
    flex: 1,
    paddingVertical: moderateVerticalScale(5),
  },
  textStyle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 600,
  },
  innerViewStyle: {
    flex: 1,
    flexDirection: 'row',
	justifyContent: 'space-between',
    paddingVertical: moderateVerticalScale(10),
  },
  iconViewStyle: {
    // backgroundColor: 'aqua',
    width: '20%',
    alignItems: 'center',
  },
  iconStyle: {
    color: colors.white,
  },
  circleView: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.white,
  },
  iconTextStyle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 600,
  },


  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconDisplay: {
    paddingBottom: 200,
  },
});

export default styles;
