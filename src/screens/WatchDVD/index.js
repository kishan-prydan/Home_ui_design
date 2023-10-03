import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import colors from '../../assets/theme/colors';
import Container from '../../component/common/Container';
import {useNavigation} from '@react-navigation/native';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import FourButton from '../../component/common/RemoteButton/FourButton';
import TwoButton from '../../component/common/RemoteButton/TwoButton';
import MiddleButton from '../../component/common/RemoteButton/MiddleButton';

const WatchDVD = () => {
  const {navigate} = useNavigation();
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconThird
            iconForth
            title={'WATCH DVD'}
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
            oonPressFirst={() => Alert.alert('Drawer button pressed')}
            onPressSecond={() => {
              navigate(HOME);
            }}
            onPressForth={() => Alert.alert('Setting button pressed')}
            textView={{color: colors.primary}}
          />
        </View>

        <Container>
          <View style={styles.mianViewStyle}>
            <FourButton
              firstIconType={'fa6'}
              firstIconName={'power-off'}
              onPressFirst={() => Alert.alert('Power button pressed')}
              circleTextTwo
              titleTwo={'TITLE'}
              onPressSecond={() => Alert.alert('Title button pressed')}
              thirdIconType={'fa6'}
              thirdIconName={'eject'}
              onPressThird={() => Alert.alert('Eject button pressed')}
              forthIconType={'fa6'}
              forthIconName={'play'}
              onPressForth={() => Alert.alert('Play button pressed')}
            />
            <View style={{paddingVertical: 10}} />
            <TwoButton
              firstIconType={'fa6'}
              firstIconName={'volume-xmark'}
              secondIconType={'fa6'}
              secondIconName={'stop'}
              onPressFirst={() => Alert.alert('Volume mute button pressed')}
              onPressSecond={() => Alert.alert('Stop button pressed')}
            />
            <View style={{paddingVertical: 30}} />
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
            <View style={{paddingVertical: 30}} />
            <TwoButton
              circleTextOne
              titleOne={'VOL+'}
              onPressFirst={() => Alert.alert('Volume plus button pressed')}
              circleTextTwo
              titleTwo={'VOL-'}
              onPressSecond={() => Alert.alert('Volume Minus button pressed')}
            />

            <View style={{paddingVertical: 10}} />
            <FourButton
              firstIconType={'fa6'}
              firstIconName={'backward-step'}
              onPressFirst={() => Alert.alert('Backward Step button pressed')}
              secondIconType={'fa6'}
              secondIconName={'forward-step'}
              onPressSecond={() => Alert.alert('Forward Step button pressed')}
              thirdIconType={'fa6'}
              thirdIconName={'backward'}
              onPressThird={() => Alert.alert('Backward button pressed')}
              forthIconType={'fa6'}
              forthIconName={'forward'}
              onPressForth={() => Alert.alert('Forward button pressed')}
            />
          </View>
        </Container>
      </View>
    </BackgroundImage>
  );
};

export default WatchDVD;
