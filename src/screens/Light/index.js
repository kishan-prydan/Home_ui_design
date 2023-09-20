//import liraries
import React from 'react';
import {View, Alert, FlatList} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import {APPDRAWERNAVIGATION, HOME, LIGHTSETTING} from '../../constants/routeNames';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import LightComponent from '../../component/LightComponent';
import data from './data';

const Light = () => {
  const {navigate} = useNavigation();

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
          onPressFirst={() => {
            navigate(APPDRAWERNAVIGATION);
          }}
          onPressSecond={() => {
            navigate(HOME);
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
            secondIconPress={() => navigate(LIGHTSETTING)}
          />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <LightComponent
              iconType={item.type}
              iconName={item.name}
              circleWithIcon={{backgroundColor: item.color}}
              iconStyle={{color: item.iconColor}}
              value={item.value}
              titleTextPresent= {item.titleTextPresent}
              text={item.text}
              switchTitleText={item.switchText}
              switchPresent = {item.switchTitleText}
            />
          )}
        />
      </BackgroundColor>
    </View>
  );
};

export default Light;
