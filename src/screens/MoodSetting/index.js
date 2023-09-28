import React, {useState} from 'react';
import {View, Alert, TextInput} from 'react-native';
import styles from './styles';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import Container from '../../component/common/Container';
import CheckBoxComponent from '../../component/common/CheckBoxComponent';
import colors from '../../assets/theme/colors';
import CustomButton from '../../component/common/CustomButton';
import data from './data';
import TextComponent from '../../component/common/TextComponent';
import CircleWithIcon from '../../component/common/CircleWithIcon/CircleWithIcon';
import IconSelector from '../../component/common/IconSelector';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BoxInput from '../../component/common/BoxInput';
import Icon from '../../component/common/Icon';

const MoodSetting = () => {
  const [checkboxes, setCheckboxes] = useState(data.map(value => value));
  const [textInput, setTextInput] = useState('');

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
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1}}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}>
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

          {/* This code is used to display the icons */}
          <View style={styles.appContainer}>
            <View style={styles.iconDisplay}>
            <Icon
              type={selectedIcon.type}
              name={selectedIcon.icon}
              size={40}
              color="yellow"
            />
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
                <BoxInput
                  value={textInput}
                  onChangeText={text => {
                    setTextInput(text);
                  }}
                />
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
    </KeyboardAwareScrollView>
  );
};

export default MoodSetting;
