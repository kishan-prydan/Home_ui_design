import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import ClickableIcon from '../common/ClickableIcon';
import colors from '../../assets/theme/colors';
import styles from './styles';

const IconclickColorChange = () => {
  const [isToggledOne, setIsToggledOne] = useState(false);
  const [isToggledTwo, setIsToggledTwo] = useState(false);
  const [isToggledThree, setIsToggledThree] = useState(false);

  const originalColor = colors.fanBackgroundColor;
  const toggledColor = colors.cardIconColorThree;

  const handleToggleOne = () => {
	  setIsToggledOne(!isToggledOne);
	  !isToggledOne ? Alert.alert('Fan on') : Alert.alert('Fan off');
  };
  const handleToggleTwo = () => {
    setIsToggledTwo(!isToggledTwo);
    !isToggledTwo ? Alert.alert('Fan on') : Alert.alert('Fan off');
  };
  const handleToggleThree = () => {
    setIsToggledThree(!isToggledThree);
    !isToggledThree ? Alert.alert('Fan on') : Alert.alert('Fan off');
  };

  const containerStyleOne = {
    backgroundColor: isToggledOne ? toggledColor : originalColor,
  };
  const containerStyleTwo = {
    backgroundColor: isToggledTwo ? toggledColor : originalColor,
  };
  const containerStyleThree = {
    backgroundColor: isToggledThree ? toggledColor : originalColor,
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstIconStyle}>
        <ClickableIcon
          iconType={'fa6'}
          iconName={'fan'}
          iconSize={15}
          changeColor={containerStyleOne}
          secondContainer={styles.iconFirstContainer}
          iconStyle={styles.iconStyle}
          onPress={() => handleToggleOne()}
        />
      </View>
      <View style={styles.firstIconStyle}>
        <ClickableIcon
          iconType={'fa6'}
          iconName={'fan'}
          iconSize={24}
          changeColor={containerStyleTwo}
          secondContainer={styles.iconSecondContainer}
          iconStyle={styles.iconStyle}
          onPress={() => handleToggleTwo()}
        />
      </View>
      <View style={styles.firstIconStyle}>
        <ClickableIcon
          iconType={'fa6'}
          iconName={'fan'}
          iconSize={30}
          changeColor={containerStyleThree}
          secondContainer={styles.iconThirdContainer}
          iconStyle={styles.iconStyle}
          onPress={() => handleToggleThree()}
        />
      </View>
    </View>
  );
};

export default IconclickColorChange;
