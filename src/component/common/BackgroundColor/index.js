import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundColor = ({...props}) => {
  return (
    <LinearGradient
      colors={['#FEE9E4', '#EAF3FD', '#FEE9E4']}
      start={{x: 1, y: 0.1}}
      end={{x: 0, y: 1}}
      style={styles.container}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BackgroundColor;
