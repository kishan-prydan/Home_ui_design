import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
  darkmode,
  blackText,
  font16,
  font14,
  font12,
  font10,
  upperCase,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.white;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled
                ? colors.white
                : darkmode
                ? colors.themeColor
                : blackText
                ? colors.primary
                : colors.white,
              paddingLeft: loading ? 5 : 0,
              fontSize: font10
                ? 10
                : font12
                ? 12
                : font14
                ? 14
                : font16
                ? 16
                : 18,
              fontWeight: 'bold',
              textTransform: upperCase ? 'uppercase' : 'none',
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
