//import liraries
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import styles from './styles';
import Container from '../../component/common/Container';
import BoxContainer from '../../component/common/BoxContainer';
import CircleWithIcon from '../../component/common/CircleWithIcon/CircleWithIcon';
import TextComponent from '../../component/common/TextComponent';
import SliderComponent from '../../component/common/SliderComponent';
import FanSliderComponent from '../../component/FanSliderComponent';
import routeNames from './../../constants/routeNames';

const Fan = () => {
  const {navigate} = useNavigation();
  const [sliderValue, setSliderValue] = useState(2);

  const handleFanSliderPress = value => {
    setSliderValue(value);
  };

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.headreView}>
          <Header
            iconFirst
            iconThird
            iconForth
            title={'CURTAIN'}
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
            onPressForth={() => navigate(routeNames.FANSETTING)}
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
                iconName={'fan'}
                iconStyle={{color: colors.white}}
                circleView={styles.circleViewStyle}
                disabled={true}
              />
              <View style={styles.boxContainerInnerStyle}>
                <TextComponent title={'FAN 1'} textStyle={styles.textStyle} />
              </View>
              <View style={styles.lineView}>
                <View style={styles.lineNumberView}>
                  <FanSliderComponent
                    title={'Off'}
                    onPress={() => handleFanSliderPress(0)}
                  />
                  <FanSliderComponent
                    title={'1'}
                    onPress={() => handleFanSliderPress(1)}
                  />
                  <FanSliderComponent
                    title={'2'}
                    onPress={() => handleFanSliderPress(2)}
                  />
                  <FanSliderComponent
                    title={'3'}
                    onPress={() => handleFanSliderPress(3)}
                  />
                </View>
                <SliderComponent
                  sliderValue={sliderValue}
                  minimumValue={0}
                  maximumValue={3}
                  step={1}
                  sliderStyle={styles.sliderStyle}
                  maximumTrackTintColorChnage
                  whiteColor
                  trackStyle={styles.trackStyle}
                  thumbStyle={styles.thumbStyle}
                />
              </View>
            </View>
          </BoxContainer>
        </Container>
      </View>
    </BackgroundImage>
  );
};

export default Fan;
