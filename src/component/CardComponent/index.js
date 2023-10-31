import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import TextComponent from '../common/TextComponent';
import ImageComponent from '../common/ImageComponent';
import {useNavigation} from '@react-navigation/native';
import routeNames from './../../constants/routeNames';
import {useDispatch} from 'react-redux';
import {setAreazoneId} from '../../redux/actions/setAreazoneId';

const CardComponent = ({source, title, areazoneid}) => {
  const {navigate} = useNavigation();

  const dispatch = useDispatch();

  const navigateToHomeView = () => {
    dispatch(setAreazoneId(areazoneid));
    navigate(routeNames.HOMEVIEW);
  };

  // console.log('------------data============', areazoneid);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.innerContainer}
          onPress={navigateToHomeView}>
          <ImageComponent
            source={{uri: source}}
            onPress={() => {
              navigate(routeNames.ADDHOME);
            }}
          />
          <TextComponent title={title} wrapper={styles.textStyle} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CardComponent;
