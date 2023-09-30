import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import BoxContainer from '../common/BoxContainer';
import TextComponent from '../common/TextComponent';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import styles from './styles';

const MediaSettingBox = ({onPress, id, title}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <BoxContainer whiteOpacityBackground>
        <View style={styles.boxContainerView}>
          <View style={styles.textView}>
            <TextComponent
              title={`ID: ${!!id ? id : 'Not Found'}`}
              textStyle={styles.textStyleOne}
            />
            <TextComponent
              title={`Title: ${!!title ? title : 'Not Found'}`}
              textStyle={styles.textStyleTwo}
            />
          </View>
          <Icon
            type={'material'}
            name={'keyboard-arrow-right'}
            size={30}
            style={{color: colors.themeColor}}
          />
        </View>
      </BoxContainer>
    </TouchableOpacity>
  );
};

export default MediaSettingBox;
