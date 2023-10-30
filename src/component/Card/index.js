import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import CardComponent from '../CardComponent';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import routeNames from './../../constants/routeNames';
import {fetchAllAreaData} from '../../Database/Schema/AreaDetails';

const Card = () => {
  const {navigate} = useNavigation();
  const [areaData, setAreaData] = useState([]);

  useEffect(() => {
    // Fetch area data from the local database
    const fetchAreaData = async () => {
      try {
        const data = await fetchAllAreaData();

        if (data.length === 0) {
          console.log('fetchAllAreaData returned an empty array');
        }

        // console.log('api data from local storage: ', data)
        setAreaData(data);
      } catch (error) {
        console.log('Error fetching area data:', error);
      }
    };

    fetchAreaData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={areaData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            // console.log('areazone id-------------', item.areazoneid)
            return (
              <>
                <View style={{paddingHorizontal: 4}} />
                <CardComponent
                  title={item.title}
                  source={item.image}
                  areazoneid={item.areazoneid}
                />
                <View style={{paddingHorizontal: 4}} />
              </>
            );
          }}
          contentContainerStyle={styles.contentContainer}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.innerButton}
          secondary
          title="Add More Area"
          onPress={() => {
            navigate(routeNames.ADDHOME);
          }}
        />
      </View>
    </View>
  );
};

export default Card;
