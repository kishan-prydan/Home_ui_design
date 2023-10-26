import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import TextComponent from '../common/TextComponent';

const SyncingLoader = () => {
  return (
    <View style={styles.mainViewStyle}>
      <ActivityIndicator size={50} color="#ffffff" />
      <TextComponent title={'Syncing...'} textStyle={styles.textStyle} wrapper={styles.textContainer} />
      <TextComponent title={'Please Wait...'} textStyle={styles.textStyle} />
    </View>
  );
};

export default SyncingLoader;
