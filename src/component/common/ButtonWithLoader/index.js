//import liraries
import React, {Component} from 'react';
import {TouchableOpacity, ActivityIndicator, titleStyle} from 'react-native';
import styles from './styles';
import TextComponent from '../TextComponent';

const ButtonWithLoader = ({onPress, buttonStyle, isLoading, title}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...buttonStyle}} onPress={onPress} activeOpacity={0.7}>
      {!!isLoading ? (
        <ActivityIndicator size={25} color="white" />
      ) : (
        <TextComponent textStyle={{...styles.textStyle, ...titleStyle}} title={title} />
      )}
    </TouchableOpacity>
  );
};

export default ButtonWithLoader;
