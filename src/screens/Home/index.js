import React from 'react';
import Card from '../../component/Card';
import Header from '../../component/common/Header';
import {Alert, View} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import routeNames from '../../constants/routeNames';

const Home = () => {
  
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1}}>
        <Header
          title={'Select Area'}
          type={'material'}
          name={'settings'}
          size={24}
          onPressForth={() => {
            navigate(routeNames.LOGOUTSETTING)
          }}
          headerStyle={{paddingHorizontal:moderateScale(20),}}
        />
      <Card />
    </View>
  );
};

export default Home;
