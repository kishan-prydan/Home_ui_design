import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import colors from '../../../assets/theme/colors';

const IconTextCard = ({title, type, name, IconView, onPress}) => {
  return (
    <View style={{marginBottom: 20,}}>
      <TouchableOpacity style={styles.mainIconTextView} activeOpacity={0.7} onPress={onPress}>
        <View style={styles.iconTextView}>
          <View style={{...styles.IconView, ...IconView}}>
            <Icon
              type={type}
              name={name}
              style={{color: colors.primary}}
              size={25}
            />
          </View>
          <Text style={styles.textView}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default IconTextCard;
