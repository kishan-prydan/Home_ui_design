import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import TextComponent from '../common/TextComponent';

const MediaBoxComponent = ({source, title}) => {
  return (
    <View style={styles.containerView}>
      <View style={styles.cardMainView}>
        <TouchableOpacity activeOpacity={0.7} style={styles.cardInnerView}>
          <Image source={source} style={{width: 70, height: 50}} />
        </TouchableOpacity>
      </View>
      <TextComponent title={title} textStyle={styles.textStyle} />
    </View>
  );
};

export default MediaBoxComponent;
