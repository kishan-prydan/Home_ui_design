import React from 'react';
import styles from './styles';
import {Text, View} from 'react-native';

const TextComponent = ({title, wrapper}) => {
  return (
    <View style={{...styles.wrapper, ...wrapper}}>
      <Text style={styles.textMain}>{title}</Text>
    </View>
  );
};

export default TextComponent;
