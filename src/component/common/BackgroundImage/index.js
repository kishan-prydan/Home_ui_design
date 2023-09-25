//import liraries
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const BackgroundImage = ({children}) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/g4BackgroundImage.png')}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default BackgroundImage;
