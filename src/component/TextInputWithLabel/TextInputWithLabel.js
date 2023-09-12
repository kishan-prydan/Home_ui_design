import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';

// create a component
const TextInputWithLabel = ({
  label,
  placeHolder,
  inputStyle = {},
  rightIcon,
  rightImage,
  onPressRight,
  iconname,
  type,
  ...props
}) => {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      {!!label ? <Text style={styles.labelTextStyle}>{label}</Text> : ''}
      <View style={styles.flexView}>
        <TextInput
          placeholder={placeHolder}
          style={styles.inlineStyle}
          {...props}
        />
        {!!rightIcon ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPressRight}
            style={{paddingRight: 12, paddingLeft: 4}}>
            <Icon
              type={type}
              name={iconname}
              style={{color: colors.grey}}
              size={14}
            />
          </TouchableOpacity>
        ) : null}
        {!!rightImage ? (
          <TouchableOpacity activeOpacity={0.8} onPress={onPressRight}>
            <Image
              style={{tintColor: colors.blackOpacity30}}
              source={rightIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default TextInputWithLabel;
