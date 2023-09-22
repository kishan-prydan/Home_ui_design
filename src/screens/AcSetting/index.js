import React from 'react';
import {View, Alert} from 'react-native';
import Header from '../../component/common/Header';
import {useNavigation} from '@react-navigation/native';
import {APPDRAWERNAVIGATION, HOME} from '../../constants/routeNames';
import BackgroundColor from '../../component/common/BackgroundColor';
import styles from './styles';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import Container from '../../component/common/Container';
import TextComponent from '../../component/common/TextComponent';
import BoxTitle from '../../component/common/BoxTitle';
import DropdownComponent from '../../component/common/DropdownComponent';

const AcSetting = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  const data = [
    {label: 'AC', value: '1'},
    {label: 'HVAC', value: '2'},
    {label: 'AV with IR', value: '3'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconForth
          title={'AC Setting'}
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
            <View style={styles.boxTitileinnerContainer}>
              <TextComponent
                textStyle={styles.textStyle}
                title={'A/C Name : '}
              />
              <BoxTitle boxTitle={'test 1'} />
            </View>

            <View style={styles.boxTitileinnerContainer}>
              <TextComponent
                textStyle={styles.textStyle}
                title={'Subnet ID : '}
              />
              <BoxTitle boxTitle={'1'} />
            </View>

            <View style={styles.boxTitileinnerContainer}>
              <TextComponent
                textStyle={styles.textStyle}
                title={'Device ID : '}
              />
              <BoxTitle boxTitle={'12'} />
            </View>

            <View style={styles.boxTitileinnerContainer}>
              <TextComponent
                textStyle={styles.textStyle}
                title={'AC Type ID : '}
              />
              <DropdownComponent data={data} />
            </View>
          </View>

          <View style={styles.boxTitileinnerContainer}>
              <TextComponent
                textStyle={styles.textStyle}
                title={'AC Sync No : '}
              />
              <BoxTitle boxTitle={'1'} />
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

export default AcSetting;