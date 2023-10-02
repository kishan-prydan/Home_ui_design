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

const WatchAppleTV = () => {
  const {navigate} = useNavigation();
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconThird
            iconForth
            title={'WATCH APPLE TV'}
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
            onPressFirst={() => {
              navigate(APPDRAWERNAVIGATION);
            }}
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
              rectangleTextFirst
              firstTitle={'INPUT'}
              onPressFirst={() => Alert.alert('Input button pressed')}
              size={15}
              secondIcon
              secondIconType={'material'}
              secondIconName={'cast'}
              onPressSecond={() => Alert.alert('Screen cast button pressed')}
              thirdIcon
              thirdIconType={'fa6'}
              thirdIconName={'power-off'}
              onPressThird={() => Alert.alert('Power button pressed')}
            />
            <View style={{paddingVertical: 40}} />
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
            <View style={{paddingVertical: 40}} />
            <TwoButton
              circleTextOne
              titleOne={'MENU'}
              onPressFirst={() => Alert.alert('Menu button pressed')}
              secondIconType={'fa6'}
              secondIconName={'play'}
              onPressSecond={() => Alert.alert('Play button pressed')}
            />
          </View>
        </Container>
      </View>
    </BackgroundImage>
  );
};

export default WatchAppleTV;
