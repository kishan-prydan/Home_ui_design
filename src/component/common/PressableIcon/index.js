//import liraries
import React, {useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Icon from '../Icon';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import TextComponent from '../TextComponent';

const PressableIcon = ({PressableTitle, firstTitle, secondTitle}) => {
  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected(!selected);
    selected === true
      ? Alert.alert('On icon pressed')
      : Alert.alert('Off icon pressed');
  };

  return !!PressableTitle ? (
    <View style={styles.PressableTitleContainer}>
      <View style={styles.PressableTitleInnerContaner}>
        <TextComponent
          title={firstTitle}
          textStyle={styles.textStyle}
          wrapper={styles.wrapperContainer}
        />
        <TouchableOpacity
          onPress={() => handleChange()}
          style={[
            styles.PressableIconContainer,
            !selected == true ? {backgroundColor: colors.orange} : '',
          ]}>
          <Icon
            type={'fa6'}
            name={'power-off'}
            size={20}
            style={{color: colors.white}}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 15}} />
      <View style={styles.PressableTitleInnerContaner}>
        <TextComponent
          title={secondTitle}
          textStyle={styles.textStyle}
          wrapper={styles.wrapperContainer}
        />
        <TouchableOpacity
          onPress={() => handleChange()}
          style={[
            styles.PressableIconContainer,
            selected == true ? {backgroundColor: colors.orange} : '',
          ]}>
          <Icon
            type={'fa6'}
            name={'power-off'}
            size={20}
            style={{color: colors.white}}
          />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
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
