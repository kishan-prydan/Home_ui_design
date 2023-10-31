//import liraries
import React, {useEffect, useState} from 'react';
import {View, Alert} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import PressableIconText from '../../component/common/PressableIconText';
import colors from '../../assets/theme/colors';
import Container from '../../component/common/Container';
import routeNames from './../../constants/routeNames';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {fetchAllRgbwData} from '../../Database/Schema/Devices/RgbwTable';
import {getRgbwDataByDeviceId} from '../../redux/actions/getRgbwDataByDeviceId';

const Rgbw = () => {
  const {navigate} = useNavigation();
  const [data, setData] = useState([]);
  const zoneid = useSelector(state => state.setZoneId.zoneid);
  const dispatch = useDispatch();

  const navigateToRgbwComponent = itemDeviceId => {
    dispatch(getRgbwDataByDeviceId(itemDeviceId));
    navigate(routeNames.RGBWCOMPONENT);
  };

  useEffect(() => {
    const fetchRgbwData = async () => {
      try {
        const data = await fetchAllRgbwData();

        if (data.length === 0) {
          console.log('Rgbw data returned an empty array');
        }

        // Filter the data based on zoneid
        const filteredData = data.filter(item => item.zoneid === zoneid);
        console.log('Rgbw filter data--------', filteredData);
        setData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRgbwData();
  }, []);

  return (
    <View style={styles.container}>
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
            firstIconPress={() => Alert.alert('Refresh icon pressed')}
            secondIconPress={() => Alert.alert('Eye icon pressed')}
          />
        </View>

        <Container>
          {data?.map((item, index) => {
            // console.log('data==============', item);
            return (
              <View key={index} style={styles.pressableIconStyle}>
                <PressableIconText
                  onPress={() => navigateToRgbwComponent(item.deviceid)}
                  circleStyle={{backgroundColor: colors.iconSecondColor}}
                  iconType={'fa6'}
                  iconName={'lightbulb'}
                  title={item.title}
                  deviceid={item.deviceid}
                />
              </View>
            );
          })}
        </Container>
      </BackgroundColor>
    </View>
  );
};

export default Rgbw;
