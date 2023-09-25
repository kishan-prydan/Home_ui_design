import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import SliderComponent from '../common/SliderComponent';
import ClickableIcon from '../common/ClickableIcon';
import colors from '../../assets/theme/colors';

const MusicPlayerThird = ({playPausePress}) => {
  const [value, setValue] = useState(20);
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

  const onValueChange = newValue => {
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstViewStyle}></View>
      <View style={styles.secondViewStyle}>
        <ClickableIcon
          iconType={'fa6'}
          iconName={initailIcon ? 'play' : 'pause'}
          elevation
          container={styles.thirdIconContainer}
          iconStyle={{color: colors.white}}
          onPress={onPressHandler}
        />
        <SliderComponent
          orientation="horizontal"
          sliderValue={value}
          step={1}
          sliderValueChange={onValueChange}
          sliderStyle={styles.sliderStyle}
        />
      </View>
    </View>
  );
};

export default MusicPlayerThird;
