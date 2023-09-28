import React from 'react';
import {View, Alert} from 'react-native';
import Header from '../../component/common/Header';
import styles from './styles';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import Container from './../../component/common/Container/index';
import DegreeCard from '../../component/DegreeCard/DegreeCard';
import {useNavigation} from '@react-navigation/native';
import {ACSETTING, APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';

const FahrenheitScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconThird
          iconForth
          title={'TEST'}
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
          onPressForth={() => Alert.alert('Add Icon Pressed')}
        />
      </View>
      <BackgroundColor>
        <View style={styles.secondHeaderView}>
          <HeaderIconComponent
            secondIcon
            typeSecond={'fa5'}
            nameSecond={'eye'}
            secondIconPress={() => Alert.alert('Eye icon pressed')}
          />
        </View>
        <Container>
          <View style={styles.secondBoxStyle}>
            <HeaderIconComponent
              PowerIconPresent
              backgroundIconType={'material'}
              backgroundIconName={'edit'}
              backgroundIconOnPress={() => navigate(ACSETTING)}
              typeFirst={'fa'}
              nameFirst={'refresh'}
              firstIconPress={() => Alert.alert('Refresh button pressed')}
              typeSecond={'fa6'}
              nameSecond={'power-off'}
              secondIconPress={() => Alert.alert('Power button pressed')}
              typeThird={'fa5'}
              nameThird={'tachometer-alt'}
              textName={'1.5 KV'}
            />
          </View>
          <View>
            <DegreeCard />
          </View>
        </Container>
      </BackgroundColor>
    </View>
  );
};

export default FahrenheitScreen;
