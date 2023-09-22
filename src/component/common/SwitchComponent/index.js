import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import colors from '../../../assets/theme/colors';
import {moderateScale} from 'react-native-size-matters';

const SwitchComponent = ({initialValue}) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  useEffect(() => {
    // console.log('Switch state changed:', isEnabled);
  }, [isEnabled]);

  return (
    <Switch
      value={isEnabled}
      onValueChange={toggleSwitch}
      trackColor={{false: colors.white, true: colors.themeColor}}
      thumbColor={isEnabled ? colors.themeColor : colors.white}
      ios_backgroundColor="gray"
      style={{transform: [{scaleX: 0.7}, {scaleY: 0.4}]}}
    />
  );
};

export default SwitchComponent;
