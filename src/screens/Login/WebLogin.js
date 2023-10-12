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
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/actions/auth';

import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunction';
import actions from '../../redux/actions';


const WebLogin = () => {
  const {navigate} = useNavigation();

  const [state, setState] = useState({
    isLoading: false,
    code: '124565',
    userName: 'kishan@gmail.com',
    password: '12345678',
    isSecure: true,
  });

  const {isLoading, code, userName, password, isSecure} = state;

  const updateState = data => setState(() => ({...state, ...data}));

  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [code, userName, password]);

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
  };

  const isValidData = () => {
    const error = validator({
      code,
      userName,
      password,
    });
    if (error) {
      // Alert.alert(error)
      showError(error);
      return false;
    }
    return true;
  };

  const handleSubmit = async() => {
    const checkValid = isValidData();

    if (checkValid) {
      try {
        const res = await actions.login({
          distributercode: code,
          userName: userName,
          password: password,
        })

        console.log('++++++++++++ api response ++++++++++++++++', res);
      } catch (error) {
        showError(error.message);
      }
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
              onChangeText={code => updateState({code})}
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
              onChangeText={userName => updateState({userName})}
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
              onChangeText={password => updateState({password})}
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
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WebLogin;
