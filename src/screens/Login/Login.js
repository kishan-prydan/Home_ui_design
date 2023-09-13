import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import CustomButton from '../../component/common/CustomButton';
import TextInputWithLabel from '../../component/TextInputWithLabel/TextInputWithLabel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../navigation/Routes';
import {HOME, LOADING} from '../../constants/routeNames';

const LoginComponent = () => {
  const {navigate} = useNavigation();

  const [code, setCode] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // if (clicked) {
    validateForm();
    // }
  }, [code, userName, password]);

  //validation code

  const validateForm = () => {
    let errors = {};

    if (!code) {
      errors.code = 'Dealer code is required.';
    } else if (code.length < 5) {
      errors.code = 'Dealer code must be at least 5 characters.';
    }

    if (!userName) {
      errors.userName = 'User name is required.';
    } else if (!/\S+@\S+\.\S+/.test(userName)) {
      errors.userName = 'User name is invalid.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  //get the login data from the local storage

  // const login = async () => {
  //   let userData = await AsyncStorage.getItem('userData');
  //   if (userData) {
  //     userData = JSON.parse(userData);
  //     if (
  //       code == userData.code &&
  //       userName == userData.userName &&
  //       password == userData.password
  //     ) {
  //       navigate(HOME)
  //       AsyncStorage.setItem(
  //         'userData',
  //         JSON.stringify({...userData, loggedIn: true}),
  //       );
  //     } else {
  //       Alert.alert('Error', 'Invalid Details');
  //     }
  //   } else {
  //     Alert.alert('Error', 'User does not exist');
  //   }
  // };

  // const loginData = {
  //   dealerCode: code,
  //   username: userName,
  //   password: password,
  // };

  // const login = async loginData => {
  //   try {
  //     await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
  //     console.log(
  //       `Dealer code : ${code}, User Name : ${userName}, Password : ${password}}`,
  //     );
  //   } catch (error) {
  //     console.error('Error storing login data: ', error);
  //   }
  // };

  const handleSubmit = () => {
    if (isFormValid) {
      // login(loginData);
      Alert.alert('Login successfully!');
      console.log(
        `Dealer code : ${code}, User Name : ${userName}, Password : ${password}}`,
      );
      navigate(HOME);
      // setCode('');
      // setUserName('');
      // setPassword('');
      // setClicked(false);
    } else {
      Alert.alert('All feilds are mandatory.');
      // setClicked(true);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imagePath.backgroundImage}
        style={styles.imgStyle}
      />

      <View style={styles.mainStyle}>
        <View style={styles.innerMainView}>
          <View style={styles.innerStyle}>
            <TextInputWithLabel
              placeHolder="Dealer Code*"
              name="dealerCode"
              keyboardType="numeric"
              value={code}
              onChangeText={setCode}
              rightIcon
              type={'fa5'}
              iconname={'hashtag'}
            />
            <Text style={styles.errorText}>{errors.code}</Text>

            <TextInputWithLabel
              placeHolder="User name"
              name="userName"
              keyboardType="email-address"
              value={userName}
              onChangeText={setUserName}
              rightIcon
              type={'fa6'}
              iconname={'user-large'}
            />
            <Text style={styles.errorText}>{errors.userName}</Text>

            <TextInputWithLabel
              placeHolder="Password"
              name="password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              rightIcon
              type={'fa6'}
              iconname={'lock'}
            />
            <Text style={styles.errorText}>{errors.password}</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.forgotView}
              onPress={() => Alert.alert('Forgot password button clicked')}>
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginButtonContainer}>
            <CustomButton
              style={styles.loginButton}
              secondary
              title="Log in"
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginComponent;
