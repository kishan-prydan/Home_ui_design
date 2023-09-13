import React from 'react';
import Header from '../../component/common/Header';
import {Alert, View} from 'react-native';
import styles from './styles';
import BackgroundImage from '../../component/BackgroundImage';
import {useNavigation} from '@react-navigation/native';
import {LOGIN, SWEETHOME} from '../../constants/routeNames';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CircleWithIcon from '../../component/common/CircleWithIcon/CircleWithIcon';
import colors from '../../assets/theme/colors';

const HomeView = () => {
  const {navigate} = useNavigation();

  // const handleLogout = async () => {
  //   try {
  //     await AsyncStorage.removeItem('loginData');
  //     Alert.alert('Logged out successfully');
  //     navigate(LOGIN)

  //   } catch (error) {
  //     console.error('Error logging out: ', error);
  //   }
  // };

  return (
    <>
      <View style={{paddingHorizontal: 20}}>
        <Header
          iconFirst
          iconSecond
          iconForth
          type={'material'}
          name={'settings'}
          firstType={'entypo'}
          firstName={'home'}
          secondType={'fa'}
          secondName={'building'}
          thirdType={'material'}
          thirdName={'settings-suggest'}
          size={24}
          onPressFirst={() => {
            Alert.alert('First setting button pressed');
          }}
          onPressSecond={() => {
            Alert.alert('Home button pressed');
          }}
          onPressForth={() => {
            Alert.alert('Setting button pressed');
          }}
        />
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.backgroudImageContainer}>
          <BackgroundImage
            onPress={() => {
              navigate(SWEETHOME);
            }}
          />
        </View>

        <View style={styles.iconView}>
          <CircleWithIcon
            circleView={{backgroundColor: colors.secondary}}
            iconStyle={{color: colors.yellow}}
            iconType={'ant'}
            iconName={'star'}
            onPress={() =>{Alert.alert("Bottom star button pressed")}}
          />
        </View>
      </View>
      {/* <View>
        <Button title="Logout" onPress={handleLogout} />
      </View> */}
    </>
  );
};

export default HomeView;
