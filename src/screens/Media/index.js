import React from 'react';
import {View, Alert, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../component/common/Header';
import Container from '../../component/common/Container';
import colors from '../../assets/theme/colors';
import BackgroundImage from '../../component/common/BackgroundImage';
import {APPDRAWERNAVIGATION, HOMEVIEW} from '../../constants/routeNames';
import TextComponent from '../../component/common/TextComponent';
import imagePath from '../../constants/imagePath';
import MediaBoxComponent from '../../component/MediaBoxComponent';
import data from './data';

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
            onPressFirst={() => {
              navigate(APPDRAWERNAVIGATION);
            }}
            onPressSecond={() => {
              navigate(HOMEVIEW);
            }}
            onPressForth={() => Alert.alert('Button pressed')}
            textView={{color: colors.primary}}
          />
        </View>

        <View style={styles.mianDisplayView}>
          <Container>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {data.map((item, index) => {
                return (
                  <MediaBoxComponent
                    key={index}
                    source={item.image}
                    title={item.title}
                  />
                );
              })}
            </View>
          </Container>
        </View>
      </View>
    </BackgroundImage>
  );
};

export default Media;
