import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import BackgroundColor from '../../component/common/BackgroundColor';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import Header from '../../component/common/Header';
import BoxTitle from '../../component/common/BoxTitle';
import styles from './styles';
import Container from '../../component/common/Container';
import data from './data';
import ClickableIcon from '../../component/common/ClickableIcon';
import TextComponent from '../../component/common/TextComponent';
import {useNavigation} from '@react-navigation/native';
import routeNames from './../../constants/routeNames';

const Hvac = () => {
  const {navigate} = useNavigation();
  const [changeText, setchangeText] = useState(true);

  const displayText = changeText ? 'climate off' : 'climate on';

  const handleTextChnage = () => {
    setchangeText(!changeText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconThird
          iconForth
          title={'TEST'}
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
          onPressForth={() => Alert.alert('Add Icon Pressed')}
        />
      </View>
      <BackgroundColor>
        <View style={styles.secondHeaderView}>
          <HeaderIconComponent
            secondIcon
            typeSecond={'fa5'}
            nameSecond={'eye'}
            secondIconPress={() => Alert.alert('Eye icon pressed')}
          />
        </View>
        <Container style={styles.boxMainView}>
          {data.map((data, index) => {
            return (
              <BoxTitle
                key={index}
                boxTitle={
                  data.degree === 'f' || data.degree === 'F'
                    ? data.Fvalue + ' ' + '\u2109'
                    : data.Cvalue + ' ' + '\u2103'
                }
                container={styles.boxStyle}
                textStyle={styles.textStyle}
                clickableText
                onPress={() => {
                  data.screen
                    ? navigate(data.screen)
                    : Alert.alert('Not Found');
                }}
              />
            );
          })}
          <View style={{alignItems: 'center'}}>
            <ClickableIcon
              elevation
              iconType={'fa6'}
              iconName={'power-off'}
              container={styles.clickableIconView}
              onPress={() => handleTextChnage()}
            />
            <TextComponent
              title={displayText}
              textStyle={styles.textView}
              wrapper={styles.wrapperView}
            />
          </View>
        </Container>
      </BackgroundColor>
    </View>
  );
};

export default Hvac;
