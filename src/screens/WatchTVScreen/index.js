import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import colors from '../../assets/theme/colors';
import Container from '../../component/common/Container';
import {useNavigation} from '@react-navigation/native';
import {
  APPDRAWERNAVIGATION,
  HOME,
  MEDIAOTHERSETTING,
} from '../../constants/routeNames';
import FourButton from '../../component/common/RemoteButton/FourButton';
import TwoButton from '../../component/common/RemoteButton/TwoButton';
import VolumeChangeButton from '../../component/common/RemoteButton/VolumeChangeButton';
import ThreeButton from '../../component/common/RemoteButton/ThreeButton';

const WatchTVScreen = () => {
  const {navigate} = useNavigation();
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconThird
            iconForth
            title={'WATCH TV'}
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
            onPressForth={() => navigate(MEDIAOTHERSETTING)}
            textView={{color: colors.primary}}
          />
        </View>

        <Container>
          <View style={styles.mianViewStyle}>
            <FourButton
              firstIconType={'fa6'}
              firstIconName={'gamepad'}
              onPressFirst={() => Alert.alert('Game pad button pressed')}
              secondIconType={'fa6'}
              secondIconName={'keyboard'}
              onPressSecond={() => Alert.alert('Keyboard button pressed')}
              thirdIconType={'entypo'}
              thirdIconName={'home'}
              onPressThird={() => Alert.alert('Home button pressed')}
              forthIconType={'fa6'}
              forthIconName={'power-off'}
              onPressForth={() => Alert.alert('Power button pressed')}
            />
            <View style={{paddingVertical: 10}} />
            <TwoButton
              maxWidthButtonAvailable
              recFirstIconType={'fa6'}
              recFirstIconName={'pause'}
              recSecondIconType={'fa6'}
              recSecondIconName={'play'}
              recThirdIconType={'fa6'}
              recThirdIconName={'stop'}
              onPressRecFirst={() => Alert.alert('Pause button pressed')}
              onPressRecSecond={() => Alert.alert('Play button pressed')}
              onPressRecThird={() => Alert.alert('Stop button pressed')}
              firstIconType={'fa6'}
              firstIconName={'backward'}
              secondIconType={'fa6'}
              secondIconName={'forward'}
              onPressFirst={() => Alert.alert('Back button pressed')}
              onPressSecond={() => Alert.alert('Next button pressed')}
            />
            <View style={{paddingVertical: 30}} />
            <VolumeChangeButton />
            <View style={{paddingVertical: 30}} />

            <FourButton
              circleTextOne
              titleOne={'Mute'}
              onPressFirst={() => Alert.alert('Mute button pressed')}
              circleTextTwo
              titleTwo={'Title'}
              onPressSecond={() => Alert.alert('Title button pressed')}
              circleTextThree
              titleThree={'Source'}
              onPressThird={() => Alert.alert('Source button pressed')}
              circleTextForth
              titleFour={'Guide'}
              onPressForth={() => Alert.alert('Guide button pressed')}
              exrtraButton
              circleTextExtra
              extraTitle={'Tools'}
              onPressExtra={() => Alert.alert('Tools button pressed')}
            />

            <View style={{paddingVertical: 10}} />
            <ThreeButton
              firstIcon
              firstIconType={'ioni'}
              firstIconName={'arrow-undo'}
              size={20}
              onPressFirst={() => Alert.alert('Back button pressed')}
              secondIcon
              secondIconType={'ant'}
              secondIconName={'CodeSandbox'}
              onPressSecond={() => Alert.alert('Box button pressed')}
              thirdIcon
              thirdIconType={'entypo'}
              thirdIconName={'cross'}
              onPressThird={() => Alert.alert('Cancel button pressed')}
            />
          </View>
        </Container>
      </View>
    </BackgroundImage>
  );
};

export default WatchTVScreen;
