//import liraries
import React from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import BackgroundImage from '../../component/common/BackgroundImage';
import Header from '../../component/common/Header';
import HeaderIconComponent from '../../component/common/HeaderIconComponent';
import colors from '../../assets/theme/colors';
import CustomButton from '../../component/common/CustomButton';
import routeNames from './../../constants/routeNames';

const MoodScreen = () => {
  const {navigate} = useNavigation();

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
            onPressForth={() => Alert.alert('Add Icon Pressed')}
            textView={{color: colors.primary}}
          />
        </View>
        <View style={styles.secondHeaderView}>
          <HeaderIconComponent
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
        <View style={styles.boxContainerStyle}>
          <View style={styles.boxContainerFirstStyle}>
            {/* <Text>Kishan</Text> */}
          </View>
          <View style={styles.boxContainerSecondStyle}>
            <CustomButton
              title={'Record Mood'}
              darkmode
              style={[
                styles.customButtonStyle,
                {backgroundColor: colors.white},
              ]}
              onPress={() => navigate(routeNames.MODSETTING)}
            />
          </View>
        </View>
      </View>
    </BackgroundImage>
  );
};

export default MoodScreen;
