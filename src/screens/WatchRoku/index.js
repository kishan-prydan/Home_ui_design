import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import colors from '../../assets/theme/colors';
import Container from '../../component/common/Container';
import {useNavigation} from '@react-navigation/native';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import TwoButton from '../../component/common/RemoteButton/TwoButton';
import MiddleButton from '../../component/common/RemoteButton/MiddleButton';
import ThreeButton from '../../component/common/RemoteButton/ThreeButton';
import FourButton from '../../component/common/RemoteButton/FourButton';
import CircleButton from '../../component/common/CircleButton';

const WatchRoku = () => {
  const {navigate} = useNavigation();
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconThird
            iconForth
            title={'WATCH ROKU'}
            type={'material'}
            name={'settings'}
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
            onPressForth={() => Alert.alert('Setting button pressed')}
            textView={{color: colors.primary}}
          />
        </View>

        <Container>
          <View style={styles.mianViewStyle}>
            <ThreeButton
              firstIcon
              firstIconType={'fa6'}
              firstIconName={'arrow-left'}
              onPressFirst={() => Alert.alert('Left Arrow button pressed')}
              size={15}
              thirdIcon
              thirdIconType={'entypo'}
              thirdIconName={'home'}
              onPressThird={() => Alert.alert('Home button pressed')}
            />
            <MiddleButton
              leftIconType={'ant'}
              leftIconName={'caretleft'}
              onPressLeft={() => Alert.alert('Left button clicked')}
              rightIconType={'ant'}
              rightIconName={'caretright'}
              onPressRight={() => Alert.alert('Right button clicked')}
              topIconType={'ant'}
              topIconName={'caretup'}
              onPressTop={() => Alert.alert('Up button clicked')}
              bottomIconType={'ant'}
              bottomIconName={'caretdown'}
              onPressBottom={() => Alert.alert('Down button clicked')}
              circleText
              title={'OK'}
              textStyle={styles.textStyle}
              onPressCenter={() => Alert.alert('OK button clicked')}
            />
            <ThreeButton
              firstIcon
              firstIconType={'fa'}
              firstIconName={'refresh'}
              onPressFirst={() => Alert.alert('Refresh button pressed')}
              size={15}
              thirdIcon
              thirdIconType={'ant'}
              thirdIconName={'star'}
              onPressThird={() => Alert.alert('Star button pressed')}
            />
            <View style={styles.backPlayNextButtonStyle}>
              <CircleButton
                iconType={'fa6'}
                iconName={'backward'}
                onPress={() => Alert.alert('Back button pressed')}
              />
              <View style={{paddingHorizontal: 20}}>
                <CircleButton
                  iconType={'fa6'}
                  iconName={'play'}
                  onPress={() => Alert.alert('Play button pressed')}
                />
              </View>
              <CircleButton
                iconType={'fa6'}
                iconName={'forward'}
                onPress={() => Alert.alert('Next button pressed')}
              />
            </View>
            <ThreeButton
              firstIcon
              rectangleTextFirst
              firstTitle={'MGO'}
              onPressFirst={() => Alert.alert('MGO button pressed')}
              secondIcon
              rectangleTextSecond
              secondTitle={'AMAZON'}
              onPressSecond={() => Alert.alert('AMAZON button pressed')}
            />
            <View style={{paddingVertical: 10}} />
            <ThreeButton
              firstIcon
              rectangleTextFirst
              firstTitle={'NETFLIX'}
              onPressFirst={() => Alert.alert('NETFLIX button pressed')}
              secondIcon
              rectangleTextSecond
              secondTitle={'SAMSUNG'}
              onPressSecond={() => Alert.alert('SAMSUNG button pressed')}
            />
          </View>
        </Container>
      </View>
    </BackgroundImage>
  );
};

export default WatchRoku;
