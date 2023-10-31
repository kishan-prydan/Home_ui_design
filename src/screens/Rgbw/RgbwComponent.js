//import liraries
import React, {useState, useEffect} from 'react';
import {View, Alert, FlatList} from 'react-native';
import Header from '../../component/common/Header';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import RgbwSliderComponent from '../../component/RgbwSliderComponent';
import data from './data';
import {useNavigation, useRoute} from '@react-navigation/native';
import routeNames from './../../constants/routeNames';
import { useSelector } from 'react-redux';
import { fetchAllRgbwData } from '../../Database/Schema/Devices/RgbwTable';

const RgbwComponent = () => {
  const {navigate} = useNavigation();
  const [rgbwData, setRgbwData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const route = useRoute();

  // console.log('ayfdtfsaygcgsacxygccsgc', route);

  const zoneid = useSelector(state => state.setZoneId.zoneid);
  const deviceId = useSelector((state) => state.getRgbwDataByID.deviceid);

  useEffect(() => {
    const fetchRgbwData = async () => {
      try {
        const data = await fetchAllRgbwData();

        if (data.length === 0) {
          console.log('Rgbw data returned an empty array');
        }

        // Filter the data based on zoneid
        const filteredData = data.filter(item => item.zoneid === zoneid);
        console.log('Rgbw component filter data based on zoneid--------', filteredData);
        setRgbwData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRgbwData();
  }, []);

  const filteredRgbwData = rgbwData.filter(item => item.deviceid === deviceId);
  
  console.log('Rgbw inner component filter data based on deviceid--------', filteredRgbwData);


  return (
    <View style={styles.componentContainer}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconThird
          iconForth
          title={'RGBW'}
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
          onPressForth={() => Alert.alert('Add Icon Pressed')}
        />
      </View>
      <BackgroundColor>
        <View style={styles.secondHeaderView}>
          <HeaderIconComponent
            secondIcon
            typeSecond={'fa5'}
            nameSecond={'eye'}
            textPresend
            textName={'0.4 KV'}
            secondIconPress={() => Alert.alert('Eye icon pressed')}
          />
        </View>

        <View style={styles.sliderView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
              <RgbwSliderComponent
                mainTitle={item.colorTitle}
                iconType={item.iconType}
                iconName={item.iocnName}
                iconStyle={{color: item.iconColor}}
                circleWithIcon={{
                  ...styles.circleIcon,
                  backgroundColor: item.backgroundColor,
                }}
                value={item.value}
                titleTextPresent
                text={''}
                onLongPress={() => Alert.alert('Long press button pressed')}
              />
            )}
          />
        </View>
      </BackgroundColor>
    </View>
  );
};

export default RgbwComponent;
