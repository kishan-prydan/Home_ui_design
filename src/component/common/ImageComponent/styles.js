import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  ImageView: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'relative',
  },

  IconView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.iconBackgroundColor,
    position: 'absolute',
    right: 0,
    elevation: 7,
    marginRight: 7,
    marginTop: 7,
  },

  EditButtonIcon:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
