import React from 'react';
import {View, Alert, FlatList} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../component/common/Header';
import colors from '../../assets/theme/colors';
import BackgroundImage from '../../component/common/BackgroundImage';
import MediaBoxComponent from '../../component/MediaBoxComponent';
import data from './data';
import routeNames from './../../constants/routeNames';

const Media = () => {
  const {navigate} = useNavigation();

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconThird
            iconForth
            title={'MEDIA'}
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
              navigate(routeNames.HOMEVIEW);
            }}
            onPressForth={() => Alert.alert('Button pressed')}
            textView={{color: colors.primary}}
          />
        </View>

        <View style={styles.mianDisplayView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={3}
            renderItem={({item}) => (
              <>
                <View style={{paddingHorizontal: 5}} />
                <MediaBoxComponent
                  source={item.image}
                  title={item.title}
                  onPress={() =>
                    item.screen
                      ? navigate(item.screen)
                      : Alert.alert('Screen not available')
                  }
                />
                <View style={{paddingHorizontal: 5}} />
              </>
            )}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
      </View>
    </BackgroundImage>
  );
};

export default Media;
