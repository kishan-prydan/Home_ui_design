import React from 'react';
import {View, FlatList} from 'react-native';
import CardComponent from '../CardComponent';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ADDHOME} from '../../constants/routeNames';
import dummyData from './dummyData';

const Card = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummyData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              <View style={{paddingHorizontal: 4}} />
              <CardComponent title={item.title} source={item.source} />
              <View style={{paddingHorizontal: 4}} />
            </>
          )}
          contentContainerStyle={styles.contentContainer}
        />

        {/* <CardComponent
            title={'HOME'}
            source={require('../../assets/images/home.jpg')}
          />
          <CardComponent
            title={'OFFICE'}
            source={require('../../assets/images/building.jpg')}
          />
          <CardComponent
            title={'HOME'}
            source={require('../../assets/images/home.jpg')}
          />
          <CardComponent
            title={'OFFICE'}
            source={require('../../assets/images/building.jpg')}
          /> */}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.innerButton}
          secondary
          title="Add More Area"
          onPress={() => {
            navigate(ADDHOME);
          }}
        />
      </View>
    </View>
  );
};

export default Card;
