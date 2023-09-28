//import liraries
import React, {useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Icon from '../Icon';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import TextComponent from '../TextComponent';

const PressableIcon = ({
  PressableTitle,
  firstTitle,
  secondTitle,
  bottomTextPresent,
  whiteText,
  iconColor,
  style,
  backgroundColor,
  iconType,
  iconName,
  bottomFirstTitle,
  bottomSecondTitle,
}) => {

  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected(!selected);
    selected === true
      ? Alert.alert('1st icon pressed')
      : Alert.alert('2nd icon pressed');
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
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => handleChange()}
          style={[
            backgroundColor ? styles.containerWhite : styles.container,
            !selected == true ? {backgroundColor: colors.orange} : '',
          ]}>
          <Icon
            type={iconType}
            name={iconName}
            size={25}
            style={iconColor ? style : {color: 'yellow'}}
          />
        </TouchableOpacity>
        {!!bottomTextPresent ? (
          <TextComponent
            title={bottomFirstTitle}
            textStyle={
              whiteText
                ? {color: colors.white, fontSize: 12, paddingTop: 6}
                : {color: colors.themeColor}
            }
          />
        ) : null}
      </View>
      <View style={{paddingHorizontal: 15}} />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => handleChange()}
          style={[
            backgroundColor ? styles.containerWhite : styles.container,
            selected == true ? {backgroundColor: colors.orange} : '',
          ]}>
          <Icon
            type={iconType}
            name={iconName}
            size={25}
            style={iconColor ? style : {color: 'yellow'}}
          />
        </TouchableOpacity>
        {!!bottomTextPresent ? (
          <TextComponent
            title={bottomSecondTitle}
            textStyle={
              whiteText
                ? {color: colors.white, fontSize: 12, paddingTop: 6}
                : {color: colors.themeColor}
            }
          />
        ) : null}
      </View>
    </View>
  );
};

export default PressableIcon;
