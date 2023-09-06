import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Alert, Image} from 'react-native';
import colors from '../../../assets/theme/colors';
import Icon from '../../common/Icon';
import styles from './styles';
import ImagePickerCropper from 'react-native-image-crop-picker';

const ImagePicker = ({imagePathProps}) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon color={colors.secondary} size={21} name="camera" />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
          mediaType: 'photo',
        }).then(image => {
          if (image) {
            const imageUri = image.path;
            imagePathProps(imageUri);
          }
        });
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon name="image" color={colors.secondary} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
          mediaType: 'photo',
        }).then(image => {
          if (image) {
            const imageUri = image.path;
            imagePathProps(imageUri);
          }
        });
      },
    },
  ];
  return (
    <View style={styles.optionsWrapper}>
      {options.map(({name, onPress, icon}) => (
        <TouchableOpacity
          onPress={onPress}
          style={styles.pickerOption}
          key={name}>
          {icon}
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ImagePicker;
