//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CircleWithIcon from './../CircleWithIcon/CircleWithIcon';
import TextComponent from './../TextComponent/index';
import Icon from '../Icon';
import colors from '../../../assets/theme/colors';

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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    height: 110,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  circleTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleStyle: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  titleView: {
    paddingLeft: 20,
  },
});

//make this component available to the app
export default PressableIconText;
