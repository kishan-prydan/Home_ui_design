
import React from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../component/common/Header';
import Container from '../../component/common/Container';
import colors from '../../assets/theme/colors';
import BackgroundImage from '../../component/common/BackgroundImage';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import BoxContainer from '../../component/common/BoxContainer';
import CircleWithIcon from '../../component/common/CircleWithIcon/CircleWithIcon';
import TextComponent from '../../component/common/TextComponent';
import CustomButton from '../../component/common/CustomButton';
import { APPDRAWERNAVIGATION, HOME, TESTCURTAIN } from '../../constants/routeNames';

const Curtain = () => {
  const {navigate} = useNavigation();

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
          iconFirst
          iconThird
          iconForth
          title={'CURTAIN'}
          type={'fa6'}
          name={'circle-plus'}
          firstType={'entypo'}
          firstName={'home'}
          secondType={'entypo'}
          secondName={'home'}
          thirdType={'entypo'}
          thirdName={'menu'}
          forthType={'ioni'}
          forthName={'arrow-undo'}
          size={24}
          onPressFirst={() => {
            navigate(APPDRAWERNAVIGATION);
          }}
          onPressSecond={() => {
            navigate(HOME);
          }}
          onPressForth={() => navigate(TESTCURTAIN)}
          textView={{color: colors.primary}}
        />
        </View>
        <View style={styles.secondHeaderView}>
          <HeaderIconComponent
            secondIcon
            typeSecond={'fa6'}
            nameSecond={'eye'}
            whiteText
            typeThird={'fa5'}
            nameThird={'tachometer-alt'}
            textName={'0.4 KV'}
            firstIconPress={() => Alert.alert('Refresh icon pressed')}
            secondIconPress={() => Alert.alert('Eye icon pressed')}
            iconColor={{color: colors.white}}
          />
        </View>
        <Container>
          <BoxContainer>
            <View style={styles.boxContainerStyle}>
              <CircleWithIcon
                iconType={'materialCommunity'}
                iconName={'curtains'}
                iconStyle={{color: colors.white}}
                circleView={styles.circleViewStyle}
                disabled={true}
              />
              <View style={styles.boxContainerInnerStyle}>
                <TextComponent
                  title={'Test Curtain'}
                  textStyle={styles.textStyle}
                />
                <View style={styles.buttonContainer}>
                  <CustomButton
                    title={'open'}
                    blackText
                    font10
                    upperCase
                    style={styles.customButtonStyle}
                    onPress={() => Alert.alert('Open button pressed')}
                  />
                  <View style={{paddingHorizontal: 10}} />
                  <CustomButton
                    title={'stop'}
                    blackText
                    font10
                    upperCase
                    style={styles.customButtonStyle}
                    onPress={() => Alert.alert('Stop button pressed')}
                  />
                  <View style={{paddingHorizontal: 10}} />
                  <CustomButton
                    title={'close'}
                    blackText
                    font10
                    upperCase
                    style={[
                      styles.customButtonStyle,
                      {backgroundColor: colors.yellow},
                    ]}
                    onPress={() => Alert.alert('Close button pressed')}
                  />
                </View>
              </View>
            </View>
          </BoxContainer>
        </Container>
      </View>
    </BackgroundImage>
  );
};

export default Curtain;
