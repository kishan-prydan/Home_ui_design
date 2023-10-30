import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import Icon from '../common/Icon';
import styles from './styles';
import colors from '../../assets/theme/colors';
import { useNavigation } from '@react-navigation/native';
import routeNames from '../../constants/routeNames';

const ClickableBackgroundImage = ({ onPress, source, title }) => {
  const {navigate} = useNavigation();

  const [isColorBoxVisible, setIsColorBoxVisible] = useState(false);

  const toggleColorBox = () => {
    setIsColorBoxVisible(!isColorBoxVisible);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  };

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
      <TouchableOpacity style={{ flex: 1 }} onPress={onPress} activeOpacity={0.9}>
        <ImageBackground
          source={{uri: source}}
          style={styles.image}
          imageStyle={styles.imageStyle}
        >
          <View style={colorBoxStyle}></View>
          <View>
            <TouchableOpacity
              style={styles.IconView}
              activeOpacity={0.7}
              onPress={toggleColorBox}
            >
              <View style={styles.EditButtonIcon}>
                <Icon
                  type={'fa6'}
                  name={'lightbulb'}
                  size={18}
                  style={{ color: colors.secondary }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                navigate(routeNames.SWEETHOME);
              }}
            >
              <Icon
                style={{ color: colors.primary }}
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
