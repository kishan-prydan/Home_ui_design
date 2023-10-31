import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '../common/Icon';
import styles from './styles';
import colors from '../../assets/theme/colors';

import {useDispatch} from 'react-redux';
import {setZoneId} from '../../redux/actions/setZoneId';
import routeNames from '../../constants/routeNames';

const ClickableBackgroundImage = ({zoneid, source, title}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const [isColorBoxVisible, setIsColorBoxVisible] = useState(false);

  const toggleColorBox = () => {
    setIsColorBoxVisible(!isColorBoxVisible);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  };

  const navigateToSweetHomeView = () => {
    dispatch(setZoneId(zoneid));
    navigate(routeNames.SWEETHOME);
  };

  // console.log('------------data in zone id============', zoneid);


  const colorBoxStyle = {
    backgroundColor: colors.headerOpacity,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: isColorBoxVisible ? 0 : '-100%',
    width: '100%',
    opacity: isColorBoxVisible ? 1 : 0,
  };

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={navigateToSweetHomeView}
        activeOpacity={0.9}>
        <ImageBackground
          source={{uri: source}}
          style={styles.image}
          imageStyle={styles.imageStyle}>
          <View style={colorBoxStyle}></View>
          <View>
            <TouchableOpacity
              style={styles.IconView}
              activeOpacity={0.7}
              onPress={toggleColorBox}>
              <View style={styles.EditButtonIcon}>
                <Icon
                  type={'fa6'}
                  name={'lightbulb'}
                  size={18}
                  style={{color: colors.secondary}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={navigateToSweetHomeView}>
              <Icon
                style={{color: colors.primary}}
                size={18}
                type={'fa5'}
                name={'eye'}
              />
            </TouchableOpacity>
            <Text style={styles.textView}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default ClickableBackgroundImage;
