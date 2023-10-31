import React, {useState, useEffect} from 'react';
import Card from '../../component/Card';
import Header from '../../component/common/Header';
import {Text, View, DevSettings, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import routeNames from '../../constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextComponent from '../../component/common/TextComponent';
import colors from '../../assets/theme/colors';

const Home = () => {
  const {navigate} = useNavigation();

  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    // Check if the flag exists in AsyncStorage
    AsyncStorage.getItem('appRestarted').then(value => {
      if (value === null) {
        setButtonVisible(true);
      }
    });
  }, []);

  const handleAppRestart = () => {
    AsyncStorage.setItem('appRestarted', 'true').then(() => {
      // Trigger a full app restart
      DevSettings.reload();
    });
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={'Select Area'}
        type={'material'}
        name={'settings'}
        size={24}
        onPressForth={() => {
          navigate(routeNames.LOGOUTSETTING);
        }}
        headerStyle={{paddingHorizontal: moderateScale(20)}}
      />
      {/* {buttonVisible && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 80,
          }}>
          <TextComponent title={'No data found'} />
          <View style={{paddingTop: 10}}>
            <TouchableOpacity onPress={handleAppRestart}>
              <Text
                style={{color: colors.danger, fontSize: 16, fontWeight: 700}}>
                Click here to refresh...
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )} */}
      <Card />
    </View>
  );
};

export default Home;
