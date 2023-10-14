import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import TextComponent from '../common/TextComponent';
import ImageComponent from '../common/ImageComponent';
import {useNavigation} from '@react-navigation/native';
import routeNames from './../../constants/routeNames';

const CardComponent = ({source, title}) => {
  const {navigate} = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.innerContainer}
          onPress={() => {
            navigate(routeNames.HOMEVIEW);
          }}>
          <ImageComponent source={source} onPress={()=>{navigate(routeNames.ADDHOME)}} />
          <TextComponent title={title} wrapper={styles.textStyle}/>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CardComponent;
