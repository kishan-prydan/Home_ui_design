import React from 'react';
import styles from './styles';
import {Image, View, TouchableOpacity, Alert} from 'react-native';
import Icon from '../Icon';
import colors from '../../../assets/theme/colors';

const ImageComponent = ({source, onPress}) => {
  return (
    <View>
      <Image source={source} alt={'image'} style={styles.ImageView} />
      <TouchableOpacity
        style={styles.IconView}
        activeOpacity={0.7}
        onPress={onPress}>
        <View style={styles.EditButtonIcon}>
          <Icon
            type={'material'}
            name={'edit'}
            size={20}
            style={{color: colors.secondary}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImageComponent;
