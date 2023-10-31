//import liraries
import React, {useState, useEffect} from 'react';
import {View, Alert, FlatList} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import LightComponent from '../../component/LightComponent';
import data from './data';
import routeNames from './../../constants/routeNames';
import {fetchAllLightData} from '../../Database/Schema/Devices/LightTable';
import {useSelector} from 'react-redux';

const Light = () => {
  const {navigate} = useNavigation();
  const zoneid = useSelector(state => state.setZoneId.zoneid);

  const [data1, setData1] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  // console.log('light data in zone id========================', zoneid);

  useEffect(() => {
    // Fetch light data from the local database
    const fetchZoneData = async () => {
      try {
        const data = await fetchAllLightData();

        if (data.length === 0) {
          console.log('light data returned an empty array');
        }

        // Filter the data based on zoneid
        const filteredData = data.filter(item => item.zoneid === zoneid);

        setZoneData(filteredData);
      } catch (error) {
        console.log('Error fetching zone data:', error);
      }
    };

    const localData = () => {
      try {
        setData1(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchZoneData();
    localData();
  }, []);

  useEffect(() => {
    setCombinedData([...data1, ...zoneData]);
  }, [data1, zoneData]);

  // console.log('data in route========================', data1);

  const navigateToLightSetting = () => {
    navigate(routeNames.LIGHTSETTING);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconThird
          iconForth
          title={'Light'}
          type={'fa6'}
          name={'circle-plus'}
          firstType={'entypo'}
          firstName={'home'}
          secondType={'entypo'}
          secondName={'home'}
          thirdType={'entypo'}
          thirdName={'menu'}
          forthType={'ioni'}
          forthName={'arrow-undo'}
          size={24}
          onPressFirst={() => Alert.alert('Drawer button pressed')}
          onPressSecond={() => {
            navigate(routeNames.HOME);
          }}
          onPressForth={() => {
            Alert.alert('Add button pressed');
          }}
        />
      </View>
      <BackgroundColor>
        <View style={styles.secondHeaderView}>
          <HeaderIconComponent
            firstIcon
            typeFirst={'fa'}
            nameFirst={'refresh'}
            secondIcon
            typeSecond={'fa5'}
            nameSecond={'eye'}
            textPresend
            textName={'0.4 KV'}
            firstIconPress={() => Alert.alert('Refresh icon pressed')}
            secondIconPress={() => Alert.alert('Eye icon pressed')}
          />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={combinedData}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            // console.log(
            //   'checking zoneid in data in flat list view==============',
            //   item,
            // );
            return (
              <LightComponent
                iconType={item.type}
                iconName={item.name}
                circleWithIcon={{backgroundColor: item.color}}
                iconStyle={{color: item.iconColor}}
                value={item.value}
                titleTextPresent={item.titleTextPresent}
                text={item.text}
                switchTitleText={item.switchText}
                switchPresent={item.switchTitleText}
                onLongPress={() => navigateToLightSetting()}
              />
            );
          }}
        />
      </BackgroundColor>
    </View>
  );
};

export default Light;
