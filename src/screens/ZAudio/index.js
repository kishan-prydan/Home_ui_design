//import liraries
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import BackgroundColor from '../../component/common/BackgroundColor';
import MusicSecondHeader from '../../component/MusicSecondHeader';
import MusicPlayerFirst from '../../component/MusicPlayerFirst';
import MusicPlayerSixth from '../../component/MusicPlayerSixth';
import MusicPlayerFifth from '../../component/MusicPlayerFifth';
import MusicPlayerFourth from '../../component/MusicPlayerFourth';
import MusicPlayerThird from '../../component/MusicPlayerThird';
import Container from '../../component/common/Container';
import MusicPlayerSecond from '../../component/MusicPlayerSecond';
import routeNames from './../../constants/routeNames';

const ZAudio = () => {
  const {navigate} = useNavigation();

  const [currentComponent, setCurrentComponent] = useState(
    <MusicPlayerFirst />,
  );

  const showComponent = component => {
    if (currentComponent === component) {
      return;
    } else {
      setCurrentComponent(component);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconThird
          iconForth
          title={'MUSIC'}
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
          onPressForth={() => navigate(routeNames.MUSICSETTING)}
        />
      </View>

      <BackgroundColor>
        <View style={styles.secondMusicHeaderView}>
          <MusicSecondHeader
            onPressFirst={() => showComponent(<MusicPlayerFirst />)}
            onPressSecond={() => showComponent(<MusicPlayerSecond />)}
            onPressThird={() => showComponent(<MusicPlayerThird />)}
            onPressFourth={() => showComponent(<MusicPlayerFourth />)}
            onPressFifth={() => showComponent(<MusicPlayerFifth />)}
            onPressSixth={() => showComponent(<MusicPlayerSixth />)}
          />
        </View>
        <Container style={styles.musicCardContaner}>
          <View style={styles.secondBoxStyle}>{currentComponent}</View>
        </Container>
      </BackgroundColor>
    </View>
  );
};

export default ZAudio;
