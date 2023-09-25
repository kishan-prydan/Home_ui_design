import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ClickableIcon from '../common/ClickableIcon';
import colors from '../../assets/theme/colors';

const MusicController = ({
  stopPress,
  backPress,
  playPausePress,
  forewardPress,
  shufflePress,
  stopIcon,
  backWardIcon,
  forewardIcon,
  shuffleIcon,
}) => {
  const [initailIcon, setinitailIcon] = useState(true);

  const iconChange = () => {
    setinitailIcon(!initailIcon);
  };

  const onPressHandler = () => {
    iconChange();

    if (playPausePress) {
      playPausePress();
    }
  };

  return (
    <View style={styles.container}>
      {!!stopIcon ? (
        <ClickableIcon
          iconType={'fa6'}
          iconName={'stop'}
          iconSize={12}
          secondContainer={styles.firstIconContainer}
          iconStyle={{color: colors.white}}
          onPress={stopPress}
        />
      ) : (
        <View />
      )}
      {!!backWardIcon ? (
        <ClickableIcon
          iconType={'fa6'}
          iconName={'backward'}
          iconSize={20}
          secondContainer={styles.secondIconContainer}
          iconStyle={{color: colors.themeColor}}
          onPress={backPress}
        />
      ) : (
        <View />
      )}
      <ClickableIcon
        iconType={'fa6'}
        iconName={initailIcon ? 'play' : 'pause'}
        elevation
        iconSize={20}
        container={styles.thirdIconContainer}
        iconStyle={{color: colors.white}}
        onPress={onPressHandler}
      />
      {!!forewardIcon ? (
        <ClickableIcon
          iconType={'fa6'}
          iconName={'forward'}
          iconSize={20}
          secondContainer={styles.forthIconContainer}
          iconStyle={{color: colors.themeColor}}
          onPress={forewardPress}
        />
      ) : (
        <View />
      )}
      {!!shuffleIcon ? (
        <ClickableIcon
          iconType={'fa6'}
          iconName={'shuffle'}
          iconSize={20}
          secondContainer={styles.fifthIconContainer}
          iconStyle={{color: colors.themeColor}}
          onPress={shufflePress}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

export default MusicController;
