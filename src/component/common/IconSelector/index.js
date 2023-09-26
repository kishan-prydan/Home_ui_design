import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from '../Icon';
import colors from '../../../assets/theme/colors';

const window = Dimensions.get('window');

const IconSelector = ({isVisible, selectedIcon, onSelectIcon, onClose}) => {
  const icons = [
    'eye',
    'glass',
    'music',
    'search',
    'heart',
    'star',
    'user',
    'close',
    'power-off',
    'remove',
    'check',
    'flag',
    'play-circle-o',
    'volume-off',
    'volume-down',
    'volume-up',
    'camera',
    'pencil',
  ];

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
              {icons.map((iconName, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => onSelectIcon(iconName)}
                  style={[
                    styles.iconWrapper,
                    iconName === selectedIcon && styles.selectedIcon,
                  ]}>
                  <Icon
                    name={iconName}
                    size={25}
                    color={iconName === selectedIcon ? 'white' : 'black'}
                  />
                </TouchableOpacity>
              ))}
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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
  },
  scrollView: {
    maxHeight: window.height * 0.5,
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconWrapper: {
    margin: 10,
    padding: 10,
    // borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  selectedIcon: {
    backgroundColor: colors.themeColor,
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
	width: '100%',
  },
  textStyle:{
	color: colors.white,
    backgroundColor: colors.themeColor,
	fontSize: 14,
	fontWeight: 'bold',
    borderRadius: 5,
    paddingVertical: 8,
	paddingHorizontal: 10
  },
});
