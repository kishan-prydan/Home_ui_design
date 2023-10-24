import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  LayoutAnimation,
} from 'react-native';
import Icon from '../common/Icon';
import styles from './styles';
import colors from '../../assets/theme/colors';

const ClickableBackgroundImage = ({ onPress }) => {
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
          source={require('../../assets/images/bedroom-image.jpg')}
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
                Alert.alert('Icon Pressed');
              }}
            >
              <Icon
                style={{ color: colors.primary }}
                size={18}
                type={'fa5'}
                name={'eye'}
              />
            </TouchableOpacity>
            <Text style={styles.textView}>Lorem ipsum_001</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default ClickableBackgroundImage;
