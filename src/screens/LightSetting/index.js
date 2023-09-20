import React, {useState} from 'react';
import {View, Alert, FlatList, ScrollView} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import BackgroundColor from '../../component/common/BackgroundColor';
import styles from './styles';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import LightSettingBoxComponent from '../../component/LightSettingBoxComponent';
import data from './data';
import PressableIcon from '../../component/common/PressableIcon';
import TextComponent from '../../component/common/TextComponent';
import colors from '../../assets/theme/colors';
import CheckBoxComponent from '../../component/common/CheckBoxComponent';
import Container from '../../component/common/Container';

const LightSetting = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconForth
          title={'Light Setting'}
          type={'ioni'}
          name={'arrow-undo'}
          firstType={'entypo'}
          firstName={'home'}
          secondType={'entypo'}
          secondName={'home'}
          thirdType={'entypo'}
          thirdName={'menu'}
          size={24}
          onPressFirst={() => {
            navigate(APPDRAWERNAVIGATION);
          }}
          onPressSecond={() => {
            navigate(HOME);
          }}
        />
      </View>
      <BackgroundColor>
        <Container>
          <View style={styles.boxTitleContainer}>
            {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item}) => (
                <LightSettingBoxComponent
                  mainTitle={item.mainTitle}
                  boxTitle={item.boxTitle}
                />
              )}
            /> */}
            {data.map((item, index) => {
              return (
                <LightSettingBoxComponent
                  key={index}
                  mainTitle={item.mainTitle}
                  boxTitle={item.boxTitle}
                />
              );
            })}
          </View>
          <View style={styles.pressableIconStyle}>
            <TextComponent
              title={'Select Icon : '}
              textStyle={{color: colors.primary}}
            />
            <PressableIcon />
          </View>
          <View style={styles.checkBoxStyle}>
            <CheckBoxComponent />
          </View>
          <View style={styles.secondHeaderView}>
            <HeaderIconComponent
              firstIcon
              typeFirst={'ioni'}
              nameFirst={'save-sharp'}
              secondIcon
              typeSecond={'fa6'}
              nameSecond={'trash-can'}
              typeThird={'fa5'}
              nameThird={'arrow-circle-left'}
              firstIconPress={() => Alert.alert('Save icon pressed')}
              secondIconPress={() => Alert.alert('Trash icon pressed')}
              thirdIconPress={() => navigation.goBack()}
            />
          </View>
        </Container>
      </BackgroundColor>
    </View>
  );
};

export default LightSetting;
