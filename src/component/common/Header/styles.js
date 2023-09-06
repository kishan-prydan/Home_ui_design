import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    minHeight: 48,
    // backgroundColor: 'yellow',
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textView:{
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.header,
  },

  imgView:{
    color: colors.header,
    height: 24,
    width: 24,
  },

  iconContainer:{
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
});
