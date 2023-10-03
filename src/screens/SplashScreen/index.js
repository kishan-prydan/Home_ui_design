import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import { LOGIN } from '../../constants/routeNames';
import imagePath from '../../constants/imagePath';
import styles from './styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(LOGIN);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={imagePath.splashScreenImage}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;
