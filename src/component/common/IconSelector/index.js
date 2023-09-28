import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from '../Icon';
import data from './data';
import styles from './styles';


const IconSelector = ({isVisible, selectedIcon, onSelectIcon, onClose}) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.iconContainer}>
              {data.map((icon, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => onSelectIcon(icon)}
                    style={[
                      styles.iconWrapper,
                      icon === selectedIcon && styles.selectedIcon,
                    ]}>
                    <Icon
                    type={icon.type}
                      name={icon.icon}
                      size={20}
                      color={icon === selectedIcon ? 'white' : 'black'}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default IconSelector;


