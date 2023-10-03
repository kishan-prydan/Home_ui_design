import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../component/common/Header';
import Container from '../../component/common/Container';
import colors from '../../assets/theme/colors';
import BackgroundImage from '../../component/common/BackgroundImage';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import BoxContainer from '../../component/common/BoxContainer';
import TextComponent from '../../component/common/TextComponent';
import CustomButton from '../../component/common/CustomButton';
import {APPDRAWERNAVIGATION, CAMERASETTING, HOME, SCENCECONTROLSETTINGS} from '../../constants/routeNames';
import CircleWithIcon from '../../component/common/CircleWithIcon/CircleWithIcon';

const Camera = () => {
  const {navigate} = useNavigation();

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconThird
            iconForth
            title={'SCENE CONTROL'}
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
            onPressFirst={() => Alert.alert('Drawer button pressed')}
            onPressSecond={() => {
              navigate(HOME);
            }}
            onPressForth={() => navigate(SCENCECONTROLSETTINGS)}
            textView={{color: colors.primary}}
          />
        </View>
        <View style={styles.secondHeaderView}>
          <HeaderIconComponent
            firstIcon
            typeFirst={'fa'}
            nameFirst={'refresh'}
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
                iconType={'fa6'}
                iconName={'video'}
                iconStyle={{color: colors.white}}
                circleView={styles.circleViewStyle}
                disabled={false}
                onLongPress={() => navigate(CAMERASETTING)}
              />
              <View style={styles.boxContainerInnerStyle}>
                <TextComponent
                  title={'Screen 1'}
                  textStyle={styles.textStyle}
                />
                <View style={styles.buttonContainer}>
                  <CustomButton
                    title={'RUN'}
                    blackText
                    font10
                    upperCase
                    style={styles.customButtonStyle}
                    onPress={() => Alert.alert('Run button pressed')}
                  />
                  <View style={{paddingHorizontal: 10}} />
                  <CustomButton
                    title={'stop'}
                    blackText
                    font10
                    upperCase
                    style={[
                      styles.customButtonStyle,
                      {backgroundColor: colors.yellow},
                    ]}
                    onPress={() => Alert.alert('Stop button pressed')}
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

export default Camera;
