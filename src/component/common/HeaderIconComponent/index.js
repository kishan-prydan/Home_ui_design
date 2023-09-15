import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import styles from './styles';

const HeaderIconComponent = ({
  firstIconPress,
  secondIconPress,
  firstIcon,
  secondIcon,
  textPresend,
  typeFirst,
  typeSecond,
  nameFirst,
  nameSecond,
  textName,
}) => {
  return (
    <View style={styles.iconStyle}>
      {!!firstIcon ? (
        <TouchableOpacity onPress={firstIconPress}>
          <Icon
            type={typeFirst}
            name={nameFirst}
            size={22}
            style={styles.iconColor}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {!!secondIcon ? (
        <TouchableOpacity onPress={secondIconPress}>
          <Icon
            type={typeSecond}
            name={nameSecond}
            size={22}
            style={styles.iconColor}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {!!textPresend ? (
        <View>
          <Text style={[styles.textStyle, styles.iconColor]}>{textName}</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default HeaderIconComponent;
