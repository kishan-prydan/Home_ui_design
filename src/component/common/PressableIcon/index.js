//import liraries
import React, {useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Icon from '../Icon';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const PressableIcon = () => {
  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected(!selected);
    selected === true
      ? Alert.alert('Icon 1 selected')
      : Alert.alert('Icon 2 selected');
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => handleChange()}
        style={[
          styles.container,
          !selected == true ? {backgroundColor: colors.blue} : '',
        ]}>
        <Icon
          type={'fa5'}
          name={'lightbulb'}
          size={25}
          style={{color: 'yellow'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleChange()}
        style={[
          styles.container,
          {marginLeft: 20},
          selected == true ? {backgroundColor: colors.blue} : '',
        ]}>
        <Icon
          type={'fa5'}
          name={'lightbulb'}
          size={25}
          style={{color: 'yellow'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PressableIcon;
