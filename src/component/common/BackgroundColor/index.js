import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundColor = () => {
  return (
    <LinearGradient
      colors={['#FEE9E4', '#EAF3FD', '#FEE9E4']}
      start={{x: 1, y: 0.1}}
      end={{x: 0, y: 1}}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackgroundColor;
