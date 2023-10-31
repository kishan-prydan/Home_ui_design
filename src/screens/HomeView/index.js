import React, {useState, useEffect} from 'react';
import Header from '../../component/common/Header';
import {Alert, View, FlatList} from 'react-native';
import styles from './styles';
import CircleWithIcon from '../../component/common/CircleWithIcon/CircleWithIcon';
import colors from '../../assets/theme/colors';
import ClickableBackgroundImage from '../../component/BackgroundImage';
import {moderateScale} from 'react-native-size-matters';
import {fetchAllZoneData} from '../../Database/Schema/ZoneDetails';
import TextComponent from '../../component/common/TextComponent';
import { useSelector } from 'react-redux';

const HomeView = () => {

  const [zoneData, setZoneData] = useState([]);
  const areazoneid = useSelector((state) => state.setAreazoneId.areazoneid);


  useEffect(() => {
    // Fetch zones data from the local database
    const fetchZoneData = async () => {
      try {
        const data = await fetchAllZoneData();

        if (data.length === 0) {
          console.log('fetchAllZoneData returned an empty array');
        }

        // Filter the data based on areazoneid
        const filteredData = data.filter(
          item => item.areazoneid === areazoneid,
        );

        setZoneData(filteredData);
      } catch (error) {
        console.log('Error fetching zone data:', error);
      }
    };

    if (areazoneid !== null) {
      fetchZoneData();
    }
  }, [areazoneid]);

  if (areazoneid === null) {
    // If areazoneid is null, return null
    return (
      <View style={styles.warningMessage}>
        <TextComponent title={'Data is not available'} />
        <TextComponent title={'Please add your zone'} />
      </View>
    );
  }

  return (
    <>
      <View style={{paddingHorizontal: moderateScale(20)}}>
        <Header
          iconFirst
          iconSecond
          iconForth
          type={'material'}
          name={'settings'}
          firstType={'entypo'}
          firstName={'home'}
          secondType={'fa'}
          secondName={'building'}
          thirdType={'material'}
          thirdName={'settings-suggest'}
          size={24}
          onPressFirst={() => {
            Alert.alert('First setting button pressed');
          }}
          onPressSecond={() => {
            Alert.alert('Home button pressed');
          }}
          onPressForth={() => {
            Alert.alert('Setting button pressed');
          }}
        />
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.backgroudImageContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={zoneData}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              // console.log('checking zoneid in data in flat list view==============', item.zoneid);
              return (
                <View style={{paddingHorizontal: 20}}>
                  <ClickableBackgroundImage
                    source={item.image}
                    title={item.title}
                    zoneid={item.zoneid}
                  />
                  <View style={{paddingVertical: 4}} />
                </View>
              );
            }}
            contentContainerStyle={styles.contentContainer}
          />
        </View>

        <View style={styles.iconView}>
          <CircleWithIcon
            circleView={{backgroundColor: colors.secondary}}
            iconStyle={{color: colors.yellow}}
            iconType={'ant'}
            iconName={'star'}
            disabled={false}
            onPress={() => {
              Alert.alert('Bottom star button pressed');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default HomeView;
