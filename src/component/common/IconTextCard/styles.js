import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import { moderateScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    mainIconTextView: {
        height: moderateScale(90),
        width: moderateScale(160),
        borderRadius: 5,
        backgroundColor: colors.white,
        justifyContent: 'center',
        elevation: 5,
      },
      iconTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: moderateScale(12),
      },
    
      IconView: {
        height: moderateScale(56),
        width: moderateScale(56),
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      textView: {
        textTransform: 'uppercase',
        paddingLeft: moderateScale(12),
        fontSize: scale(13),
        width: moderateScale(100),
        fontWeight: 'bold',
        color: colors.primary,
      },
  });

export default styles;
  