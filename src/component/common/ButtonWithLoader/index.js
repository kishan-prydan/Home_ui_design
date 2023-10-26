//import liraries
import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import TextComponent from '../TextComponent';

const ButtonWithLoader = ({
  onPress,
  buttonStyle,
  isLoading,
  title,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...buttonStyle}}
      onPress={onPress}
      activeOpacity={0.7}>
      {!!isLoading ? (
        <View style={styles.loaderViewStyle}>
          <TextComponent
            textStyle={{...styles.textStyle, ...titleStyle}}
            title={'Loading '}
          />
          <ActivityIndicator size={25} color="white" />
        </View>
      ) : (
        <TextComponent
          textStyle={{...styles.textStyle, ...titleStyle}}
          title={title}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonWithLoader;
