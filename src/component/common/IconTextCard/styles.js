import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
    mainIconTextView: {
        height: 90,
        width: 160,
        borderRadius: 5,
        backgroundColor: colors.white,
        justifyContent: 'center',
        elevation: 5,
      },
      iconTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
      },
    
      IconView: {
        height: 56,
        width: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: colors.iconSecondColor,
      },
    
      textView: {
        textTransform: 'uppercase',
        paddingLeft: 12,
        fontSize: 13,
        width: 100,
        fontWeight: 'bold',
        color: colors.primary,
      },
  });

export default styles;
  