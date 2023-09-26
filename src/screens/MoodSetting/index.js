import React, {useState} from 'react';
import {View, Text, Alert, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import Container from '../../component/common/Container';
import CheckBoxComponent from '../../component/common/CheckBoxComponent';
import colors from '../../assets/theme/colors';
import CustomButton from '../../component/common/CustomButton';
import data from './data';
import BoxContainer from '../../component/common/BoxContainer';
import TextComponent from '../../component/common/TextComponent';
import CircleWithIcon from '../../component/common/CircleWithIcon/CircleWithIcon';
import IconSelector from '../../component/common/IconSelector';
import Icon from '../../component/common/Icon';

const MoodSetting = () => {
  const [checkboxes, setCheckboxes] = useState(data.map(value => value));

  const toggleCheckbox = index => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCheckboxes(updatedCheckboxes);
  };

  const [isVisible, setIsVisible] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('eye');

  const handleIconSelect = iconName => {
    setSelectedIcon(iconName);
    setIsVisible(false);
  };

  const openIconSelector = () => {
    setIsVisible(true);
  };

  const closeIconSelector = () => {
    setIsVisible(false);
  };

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconForth
            title={'MOOD SETTING'}
            type={'ioni'}
            name={'arrow-undo'}
            firstType={'entypo'}
            size={24}
            textView={{color: colors.primary}}
          />
        </View>
        <View style={styles.checkBoxStyleContainer}>
          <Container>
            <View style={styles.checkBoxStyle}>
              {checkboxes.map((checkbox, index) => (
                <CheckBoxComponent
                  whiteColor
                  checkBoxLeft
                  key={index}
                  title={checkbox.label}
                  textStyle={styles.checkBoxInnerStyle}
                  checked={checkbox.checked}
                  container={styles.checkboxContainer}
                  onPress={() => toggleCheckbox(index)}
                />
              ))}
            </View>
          </Container>
        </View>

        <View style={styles.appContainer}>
          <View style={styles.iconDisplay}>
            <Icon name={selectedIcon} size={40} color='yellow' />
          </View>
          <IconSelector
            isVisible={isVisible}
            selectedIcon={selectedIcon}
            onSelectIcon={handleIconSelect}
            onClose={closeIconSelector}
          />
        </View>

        <View style={styles.customButtonContainer}>
          <View style={styles.mainViewStyle}>
            <TextComponent title={'Mood Name'} textStyle={styles.textStyle} />
            <View style={styles.innerViewStyle}>
              <View style={styles.textViewStyle}>
                {/* <Text>Kishan</Text> */}
              </View>
              <View style={styles.iconViewStyle}>
                <CircleWithIcon
                  iconType={'fa'}
                  iconName={'heart'}
                  iconStyle={styles.iconStyle}
                  circleView={styles.circleView}
				  onPress={openIconSelector}
                />
                <TextComponent
                  title={'Select icon'}
                  textStyle={styles.iconTextStyle}
                />
              </View>
            </View>
          </View>
          <CustomButton
            title={'Record Mood'}
            style={styles.customButtonStyle}
            darkmode
            onPress={() => Alert.alert('Button pressed')}
          />
        </View>
      </View>
    </BackgroundImage>
  );
};

export default MoodSetting;
