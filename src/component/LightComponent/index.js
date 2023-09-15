import React, {useState} from 'react';
import {View, Switch, Text} from 'react-native';
import styles from './styles';
import CircleWithIcon from '../common/CircleWithIcon/CircleWithIcon';
import RangeSlider from '../common/RangeSlider';
import colors from '../../assets/theme/colors';

const LightComponent = ({
  iconType,
  iconName,
  value,
  text,
  circleWithIcon,
  titleTextPresent,
  switchPresent,
  switchTitleText,
  iconStyle,
}) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View style={styles.sliderView}>
      {!!switchPresent ? (
        <View style={styles.SwitchInnerSliderView}>
          <CircleWithIcon
            iconType={iconType}
            iconName={iconName}
            disabled={true}
            circleView={{...styles.circleWithIcon, ...circleWithIcon}}
            iconStyle={iconStyle}
          />

          <View style={styles.switchView}>
            <Text style={styles.titleTextStyle}>{switchTitleText}</Text>
            <View style={styles.switchWrapper}>
              <Switch
                value={isEnabled}
                onValueChange={value => setIsEnabled(value)}
                trackColor={{false: 'transparent', true: 'transparent'}}
                thumbColor={isEnabled ? colors.inActive : colors.themeColor}
                ios_backgroundColor="gray"
                style={styles.switch}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.innerSliderView}>
          <CircleWithIcon
            iconType={iconType}
            iconName={iconName}
            disabled={true}
            circleView={{...styles.circleWithIcon, ...circleWithIcon}}
            iconStyle={iconStyle}
          />

          <RangeSlider
            titleTextPresent={titleTextPresent}
            initialValue={value}
            titleText={text}
          />
        </View>
      )}
    </View>
  );
};
export default LightComponent;
