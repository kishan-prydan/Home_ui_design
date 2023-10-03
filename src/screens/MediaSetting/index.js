//import liraries
import React from 'react';
import {View, FlatList, Alert} from 'react-native';
import styles from './styles';
import BackgroundImage from '../../component/common/BackgroundImage';
import {useNavigation} from '@react-navigation/native';
import Header from '../../component/common/Header';
import colors from '../../assets/theme/colors';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import MediaSettingBox from '../../component/MediaSettingBox';
import data from './data';

const MediaSetting = () => {
  const {navigate} = useNavigation();

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconForth
            title={'MEDIA SETTINGS'}
            type={'ioni'}
            name={'arrow-undo'}
            firstType={'entypo'}
            firstName={'home'}
            secondType={'entypo'}
            secondName={'home'}
            thirdType={'entypo'}
            thirdName={'menu'}
            size={24}
            onPressFirst={() => Alert.alert('Drawer button pressed')}
            onPressSecond={() => {
              navigate(HOME);
            }}
            textView={{color: colors.primary}}
          />
        </View>
        <View style={styles.mainViewContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
              <View style={{paddingBottom: 10}}>
                <MediaSettingBox
                  id={item.id}
                  title={item.title}
                  onPress={() =>
                    item.screen
                      ? navigate(item.screen)
                      : Alert.alert('Screen not available')
                  }
                />
              </View>
            )}
          />
        </View>
      </View>
    </BackgroundImage>
  );
};

export default MediaSetting;
