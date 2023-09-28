import React from 'react';
import {View, Alert, FlatList} from 'react-native';
import Header from '../../component/common/Header';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import PressableIconText from '../../component/common/PressableIconText';
import colors from '../../assets/theme/colors';
import RgbwSliderComponent from '../../component/RgbwSliderComponent';
import data from './data';
import { useNavigation } from '@react-navigation/native';

const RgbwComponent = () => {

  const {navigate} = useNavigation();

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
                mainTitle={item.title}
                iconType={item.iconType}
                iconName={item.iocnName}
                iconStyle={{color: item.iconColor}}
                circleWithIcon={{...styles.circleIcon, backgroundColor: item.backgroundColor}}
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
