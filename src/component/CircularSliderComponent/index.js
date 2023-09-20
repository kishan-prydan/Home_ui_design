import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import CircularSlider from 'react-native-circular-slider';

const CircularSliderComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default CircularSliderComponent;
