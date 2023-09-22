import React from 'react';
import {View} from 'react-native';
import SwitchComponent from '../SwitchComponent';
import Icon from '../Icon';
import TextComponent from '../TextComponent';
import styles from './styles';

const IconTextSwitchCard = ({
  value,
  title,
  iconType,
  iconName,
  innerStyle,
  iconStyle,
  iconView,
  textViewStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.innerStyle, ...innerStyle}}>
        <View style={{...styles.iconView, ...iconView}}>
          <Icon type={iconType} name={iconName} size={16} style={iconStyle} />
        </View>
        <View style={{...styles.textStyle, ...textViewStyle}}>
          <TextComponent title={title} textStyle={styles.textComponentStyle} />
        </View>
        <SwitchComponent
          initialValue={value}
        />
      </View>
    </View>
  );
};

export default IconTextSwitchCard;
