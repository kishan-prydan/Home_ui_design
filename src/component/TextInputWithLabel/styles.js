import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../assets/theme/colors'


const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        borderRadius: moderateScale(4),
    },
    inlineStyle: {
        paddingVertical: moderateVerticalScale(6),
        fontSize: scale(14),
        color: colors.blackOpacity80,
        flex:1
    },
    labelTextStyle: {
        fontSize: scale(14),
        color:colors.blackOpacity50,
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default styles;