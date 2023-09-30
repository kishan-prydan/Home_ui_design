import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import TextComponent from '../common/TextComponent';

const MediaBoxComponent = ({onPress, source, title}) => {
  return (
    <View style={styles.containerView}>
      <View style={styles.cardMainView}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cardInnerView}
          onPress={onPress}>
          <Image
            source={source}
            style={{width: '90%', height: '90%'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <TextComponent title={title} textStyle={styles.textStyle} />
    </View>
  );
};

export default MediaBoxComponent;
