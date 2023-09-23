import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import styles from './styles';
import ClickableIcon from '../ClickableIcon';
import colors from '../../../assets/theme/colors';

const HeaderIconComponent = ({
  PowerIconPresent,
  firstIconPress,
  secondIconPress,
  thirdIconPress,
  firstIcon,
  secondIcon,
  textPresend,
  typeFirst,
  typeSecond,
  nameFirst,
  nameSecond,
  typeThird,
  nameThird,
  textName,
  backgroundIconName,
  backgroundIconType,
  backgroundIconOnPress,
  iconStyle
}) => {
  return !!PowerIconPresent ? (
    <View style={{...styles.iconStyle, ...iconStyle}}>
      <View style={styles.clickableIconView}>
        <ClickableIcon
          iconName={backgroundIconName}
          iconType={backgroundIconType}
          secondContainer={styles.iconContainer}
          iconSize={18}
          onPress={backgroundIconOnPress}
        />
        <TouchableOpacity onPress={firstIconPress}>
          <Icon
            type={typeFirst}
            name={nameFirst}
            size={18}
            style={styles.iconColor}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={secondIconPress}>
        <Icon
          type={typeSecond}
          name={nameSecond}
          size={26}
          style={{color: colors.danger}}
        />
      </TouchableOpacity>
      <View style={styles.textIconView}>
        <Icon
          type={typeThird}
          name={nameThird}
          size={18}
          style={styles.iconColor}
        />
        <Text style={[styles.iconColor, styles.marginView]}>{textName}</Text>
      </View>
    </View>
  ) : (
    <View style={{...styles.iconStyle, ...iconStyle}}>
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
        <TouchableOpacity onPress={thirdIconPress}>
          <Icon
            type={typeThird}
            name={nameThird}
            size={22}
            style={styles.iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderIconComponent;
