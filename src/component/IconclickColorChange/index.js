import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import ClickableIcon from '../common/ClickableIcon';
import colors from '../../assets/theme/colors';

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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    paddingLeft: 20,
  },
  iconFirstContainer: {
    borderWidth: 0,
    height: 26,
    width: 26,
    borderRadius: 13,
    // backgroundColor: colors.fanBackgroundColor,
  },
  iconSecondContainer: {
    borderWidth: 0,
    height: 36,
    width: 36,
    borderRadius: 18,
    // backgroundColor: colors.fanBackgroundColor,
  },
  iconThirdContainer: {
    borderWidth: 0,
    height: 46,
    width: 46,
    borderRadius: 23,
    // backgroundColor: colors.fanBackgroundColor,
  },
  iconStyle: {
    color: colors.white,
  },
});

export default IconclickColorChange;
