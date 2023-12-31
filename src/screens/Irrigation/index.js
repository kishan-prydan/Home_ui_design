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
import CircleWithIcon from '../../component/common/CircleWithIcon/CircleWithIcon';
import TextComponent from '../../component/common/TextComponent';
import CustomButton from '../../component/common/CustomButton';
import routeNames from './../../constants/routeNames';

const Irrigation = () => {
  const {navigate} = useNavigation();

  const time = '39600';

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconThird
            iconForth
            title={'IRRIGATION'}
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
              navigate(routeNames.HOME);
            }}
            onPressForth={() => navigate(routeNames.IRRIGATIONSETTING)}
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
        <View style={styles.mianDisplayView}>
          <Container>
            <BoxContainer>
              <View style={styles.boxContainerStyle}>
                <CircleWithIcon
                  iconType={'fa6'}
                  iconName={'leaf'}
                  iconStyle={{color: colors.white}}
                  circleView={styles.circleViewStyle}
                  disabled={true}
                />
                <View style={{flex: 1}}>
                  <View style={styles.boxContainerInnerStyle}>
                    <TextComponent
                      title={'IR 1'}
                      textStyle={styles.textStyle}
                    />
                    <View style={styles.buttonContainer}>
                      <CustomButton
                        title={'run'}
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
                  <View style={styles.buttonOtherContainer}>
                    <CustomButton
                      title={`Run Time : ${time} seconds`}
                      whiteText
                      font10
                      style={styles.customOtherButtonStyle}
                      disabled={true}
                    />
                  </View>
                </View>
              </View>
            </BoxContainer>
          </Container>
          <View style={styles.stopButtonView}>
            <CustomButton
              title={'all stop'}
              upperCase
              darkmode
              style={styles.stopButtonStyle}
              onPress={() => Alert.alert('All Stops button clicked')}
            />
          </View>
        </View>
      </View>
    </BackgroundImage>
  );
};

export default Irrigation;
