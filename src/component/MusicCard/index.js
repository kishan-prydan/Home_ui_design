import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import ClickableIcon from '../common/ClickableIcon';
import ShowLessText from '../common/ShowLessText';
import TextComponent from '../common/TextComponent';
import styles from './styles';

const MusicCard = ({
  title,
  description,
  time,
  backgroundColor,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.musicMainContainer} activeOpacity={0.7}>
      <View style={styles.musicInnerContainer}>
        <ClickableIcon
          iconType={'fa6'}
          iconName={'music'}
          iconSize={17}
          changeColor={backgroundColor}
          secondContainer={styles.iconContainer}
          iconStyle={iconStyle}
          onPress={onPress}
        />
        <View style={styles.musicTextContainer}>
          <ShowLessText title={title} textStyle={styles.firstTextStyle} />
          <TextComponent
            title={description}
            textStyle={styles.secondTextStyle}
          />
        </View>
      </View>
      <View style={styles.timeContainer}>
        <TextComponent title={time} textStyle={styles.secondTextStyle} />
      </View>
    </TouchableOpacity>
  );
};

export default MusicCard;
