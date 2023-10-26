import React, {Component} from 'react';
import {View, Alert, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import HeaderIconComponent from '../common/HeaderIconComponent';
import SliderComponent from '../common/SliderComponent';
import MusicCard from '../MusicCard';
import data from './data';
import MusicController from '../MusicController';

const MusicPlayerFirst = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondHeaderView}>
        <HeaderIconComponent
          firstIcon
          typeFirst={'fa'}
          nameFirst={'refresh'}
          firstIconPress={() => Alert.alert('Refresh icon pressed')}
          iconStyle={styles.secondHeaderViewStyle}
        />
      </View>
      <View style={styles.innerContainer}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
              <MusicCard
                title={item.musicTitle}
                description={item.musicDescription}
                time={item.time}
                backgroundColor={{backgroundColor: item.backgroundColor}}
                iconStyle={{color: item.iconColor}}
              />
            )}
          />
        </View>
        <View style={styles.volumeButtonStyle}>
          <SliderComponent
            volumeButtonPresent
            initialValue={85}
            sliderStyle={styles.sliderStyle}
          />
        </View>
      </View>
      <View style={styles.musicControllerContainer}>
        <MusicController
          stopIcon
          backWardIcon
          forewardIcon
          shuffleIcon
          stopPress={() => Alert.alert('Stop button clicked')}
          backPress={() => Alert.alert('Back button clicked')}
          forewardPress={() => Alert.alert('Forward button clicked')}
          shufflePress={() => Alert.alert('Shuffle button clicked')}
        />
      </View>
    </View>
  );
};

export default MusicPlayerFirst;
