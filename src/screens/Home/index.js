import React from 'react';
import Card from '../../component/Card';
import Header from '../../component/common/Header';
import {Alert, View} from 'react-native';

const Home = () => {
  return (
    <View style={{flex: 1}}>
        <Header
          title={'Select Area'}
          type={'material'}
          name={'settings'}
          size={24}
          onPressForth={() => {
            Alert.alert('Setting button pressed');
          }}
          headerStyle={{paddingHorizontal:20,}}
        />
      <Card />
    </View>
  );
};

export default Home;
