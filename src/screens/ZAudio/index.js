//import liraries
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Header from '../../component/common/Header';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import BackgroundColor from '../../component/common/BackgroundColor';
import MusicSecondHeader from '../../component/MusicSecondHeader';
import MusicPlayerFirst from '../../component/MusicPlayerFirst';

const Component2 = () => (
  <View style={styles.component}>
    <Text>Component 2</Text>
  </View>
);

const Component3 = () => (
  <View style={styles.component}>
    <Text>Component 3</Text>
  </View>
);
const Component4 = () => (
  <View style={styles.component}>
    <Text>Component 4</Text>
  </View>
);
const Component5 = () => (
  <View style={styles.component}>
    <Text>Component 5</Text>
  </View>
);
const Component6 = () => (
  <View style={styles.component}>
    <Text>Component 6</Text>
  </View>
);

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
          onPressFirst={() => {
            navigate(APPDRAWERNAVIGATION);
          }}
          onPressSecond={() => {
            navigate(HOME);
          }}
          onPressForth={() => Alert.alert('Add Icon Pressed')}
        />
      </View>

      <BackgroundColor>
        <View style={styles.secondMusicHeaderView}>
          <MusicSecondHeader
            onPressFirst={() => showComponent(<MusicPlayerFirst />)}
            onPressSecond={() => showComponent(<Component2 />)}
            onPressThird={() => showComponent(<Component3 />)}
            onPressFourth={() => showComponent(<Component4 />)}
            onPressFifth={() => showComponent(<Component5 />)}
            onPressSixth={() => showComponent(<Component6 />)}
          />
        </View>
        <View style={styles.musicCardContaner}>
          <View style={styles.secondBoxStyle}>{currentComponent}</View>
        </View>
      </BackgroundColor>
    </View>
  );
};

export default ZAudio;
