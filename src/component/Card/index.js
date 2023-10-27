import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import CardComponent from '../CardComponent';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import routeNames from './../../constants/routeNames';
import {fetchAllAreaData} from '../../Database/Schema/AreaDetails';
import imagePath from '../../constants/imagePath';

const Card = () => {
  const {navigate} = useNavigation();
  const [areaData, setAreaData] = useState([]);

  useEffect(() => {
    // Fetch area data from the local database
    const fetchAreaData = async () => {
      try {
        const data = await fetchAllAreaData();
        setAreaData(data);
      } catch (error) {
        console.error('Error fetching area data:', error);
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
            console.log('data in flat list view==============', item);

            return (
              <>
                <View style={{paddingHorizontal: 4}} />
                <CardComponent title={item.title} source={item.image} />
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
