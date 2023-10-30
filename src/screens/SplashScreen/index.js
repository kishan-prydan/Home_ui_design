import React from 'react';
import {View, Image} from 'react-native';
import imagePath from '../../constants/imagePath';
import styles from './styles';

const SplashScreenView = () => {
  return (
    <View style={styles.container}>
      <Image source={imagePath.splashScreenImage} style={styles.logo} />
    </View>
  );
};

export default SplashScreenView;
