import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import ClickableIcon from '../ClickableIcon';
import TextComponent from '../TextComponent';
import styles from './styles';

const TextIncrementDecrement = ({celsius}) => {
  const [cvalue, setCvalue] = useState(22);
  const [fvalue, setFvalue] = useState(72);

  const cIncrementButton = () => {
    cvalue === 100
      ? Alert.alert('you have reached maximum value.')
      : setCvalue(cvalue + 1);
  };

  const fIncrementButton = () => {
    cvalue === 100
      ? Alert.alert('you have reached maximum value.')
      : setFvalue(fvalue + 1);
  };

  const cDecrementButton = () => {
    cvalue === 0
      ? Alert.alert('you have reached minimum value.')
      : setCvalue(cvalue - 1);
  };
  const fDecrementButton = () => {
    cvalue === 0
      ? Alert.alert('you have reached minimum value.')
      : setFvalue(fvalue - 1);
  };

  return !!celsius ? (
    <View style={styles.container}>
      <ClickableIcon
        iconType={'fa5'}
        iconName={'plus'}
        iconSize={12}
        iconStyle={styles.iconStyle}
        secondContainer={styles.secondContainer}
        onPress={() => cIncrementButton()}
      />
      <TextComponent title={`${cvalue}\u2103`} textStyle={styles.textStyle} />
      <ClickableIcon
        iconType={'fa5'}
        iconName={'minus'}
        iconSize={12}
        iconStyle={styles.iconStyle}
        secondContainer={styles.secondContainer}
        onPress={() => cDecrementButton()}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ClickableIcon
        iconType={'fa5'}
        iconName={'plus'}
        iconSize={12}
        iconStyle={styles.iconStyle}
        secondContainer={styles.disabledContainer}
        onPress={() => fIncrementButton()}
        disabled={true}
      />
      <TextComponent title={`${fvalue}\u2109`} textStyle={styles.textStyle} />
      <ClickableIcon
        iconType={'fa5'}
        iconName={'minus'}
        iconSize={12}
        iconStyle={styles.iconStyle}
        secondContainer={styles.disabledContainer}
        onPress={() => fDecrementButton()}
        disabled={true}
      />
    </View>
  );
};

export default TextIncrementDecrement;
