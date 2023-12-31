import React from 'react';
import {View, Alert, FlatList} from 'react-native';
import IconTextCard from '../../component/common/IconTextCard';
import Header from '../../component/common/Header';
import data from './data';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { moderateScale } from '../../styles/responsiveSize';
import routeNames from './../../constants/routeNames';

const SweetHome = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <View style={{paddingHorizontal: 20}}>
        <Header
          iconFirst
          iconThird
          iconForth
          title={'Sweet_home'}
          type={'material'}
          name={'settings'}
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
            Alert.alert('Setting button pressed');
          }}
        />
      </View>

      <View style={styles.mainView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              <View style={{paddingHorizontal: moderateScale(2)}} />
              <IconTextCard
                type={item.type}
                name={item.name}
                title={item.title}
                IconView={{backgroundColor: item.color}}
                onPress={() => {
                  item.screen ? navigate(item.screen) : Alert.alert(item.alert);
                }}
              />
              <View style={{paddingHorizontal: moderateScale(2)}} />
            </>
          )}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </>
  );
};

export default SweetHome;
