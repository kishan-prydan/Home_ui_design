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
import ThreeButton from '../../component/common/RemoteButton/ThreeButton';

const WatchSatellite = () => {
  const {navigate} = useNavigation();
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconThird
            iconForth
            title={'WATCH SATELLITE'}
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
            <View style={{paddingHorizontal: 20}}>
              <ThreeButton
                firstIcon
                rectangleTextFirst
                firstTitle={'CONTROL'}
                onPressFirst={() => Alert.alert('Control button pressed')}
                secondIcon
                rectangleTextSecond
                secondTitle={'CHANNEL'}
                onPressSecond={() => Alert.alert('Channel button pressed')}
                thirdIcon
                rectangleTextThird
                thirdTitle={'NUM PAD'}
                onPressThird={() => Alert.alert('Num Pad button pressed')}
                textStyle={{fontSize: 9}}
                forthIcon
                forthIconType={'fa6'}
                forthIconName={'power-off'}
                onPressForth={() => Alert.alert('Power button pressed')}
                size={15}
                rectangleIconViewStyle={styles.buttonStyle}
              />
            </View>
            <View style={styles.lineViewStyle} />
            <View style={{paddingHorizontal: 20}}>
              <TwoButton
                circleTextOne
                titleOne={'A'}
                circleTextTwo
                titleTwo={'B'}
                onPressFirst={() => Alert.alert('A button pressed')}
                onPressSecond={() => Alert.alert('B button pressed')}
                textStyle={{fontSize: 14}}
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
                titleOne={'FAV'}
                onPressFirst={() => Alert.alert('FAV plus button pressed')}
                circleTextTwo
                titleTwo={'MENU'}
                onPressSecond={() => Alert.alert('Menu Minus button pressed')}
              />

              <View style={{paddingVertical: 10}} />
              <FourButton
                firstIconType={'fa6'}
                firstIconName={'backward-step'}
                onPressFirst={() => Alert.alert('Backward Step button pressed')}
                secondIconType={'fa6'}
                secondIconName={'forward-step'}
                onPressSecond={() => Alert.alert('Forward Step button pressed')}
                thirdIconType={'fa5'}
                thirdIconName={'bullseye'}
                onPressThird={() => Alert.alert('Eye button pressed')}
                forthIconType={'fa6'}
                forthIconName={'stop'}
                onPressForth={() => Alert.alert('Stop button pressed')}
              />
            </View>
          </View>
        </Container>
      </View>
    </BackgroundImage>
  );
};

export default WatchSatellite;
