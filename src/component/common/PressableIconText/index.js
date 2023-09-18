//import liraries
import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import CircleWithIcon from './../CircleWithIcon/CircleWithIcon';
import TextComponent from './../TextComponent/index';
import Icon from '../Icon';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const PressableIconText = ({onPress, circleStyle, iconType, iconName, title}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={styles.innerView}>
        <View style={styles.circleTextView}>
          <CircleWithIcon
            disabled={true}
            iconType={iconType}
            iconName={iconName}
            circleView={{...styles.circleStyle, ...circleStyle}}
          />
          <TextComponent title={title} wrapper={styles.titleView} />
        </View>

        <View>
          <Icon
            type={'material'}
            name={'keyboard-arrow-right'}
            size={35}
            style={{color: colors.themeColor}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default PressableIconText;
