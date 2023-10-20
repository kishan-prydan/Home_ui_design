import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import TextInputWithLabel from '../../component/TextInputWithLabel/TextInputWithLabel';
import validator from '../../utils/validations';
import {showError, showSuccess} from '../../utils/helperFunction';
import actions from '../../redux/actions';
import ButtonWithLoader from '../../component/common/ButtonWithLoader';
import routeNames from './../../constants/routeNames';

const ForgotPassword = () => {
  const {navigate} = useNavigation();

  const [state, setState] = useState({
    isLoading: false,
    userName: '',
    // userName: 'domadiyapriyank717@gmail.com',
  });

  const {isLoading, userName} = state;

  const updateState = data => setState(() => ({...state, ...data}));

  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [userName]);

  const validateForm = () => {
    let errors = {};

    if (!userName) {
      errors.userName = 'User name is required.';
    } else if (!/\S+@\S+\.\S+/.test(userName)) {
      errors.userName = 'User name is invalid.';
    }

    setErrors(errors);
  };

  const isValidData = () => {
    const error = validator({
      userName,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const sendOtpRequest = async () => {
    let params = {
      email: userName,
    };
    const checkValid = isValidData();

    if (checkValid) {
      updateState({isLoading: true});
      try {
        const res = await actions.forgotPassword(params);
        console.log(res);
        !!res
          ? showSuccess(res.message)
          : showError('OTP sent to your registered email');
        updateState({isLoading: false});
        navigate(routeNames.OTPSCREEN);
      } catch (error) {
        showError(error?.message);
        updateState({isLoading: false});
      }
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={imagePath.backgroundImage}
        style={styles.imgStyleForgotPassword}
      />

      <View style={styles.mainStyleForgotPassword}>
        <View style={styles.innerMainViewForgotPassword}>
          <View style={styles.innerStyleForgotPassword}>
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

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.forgotView}
              onPress={() => navigate(routeNames.LOGIN)}>
              <Text style={styles.forgotText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginButtonContainer}>
            <ButtonWithLoader
              title="Get OTP"
              onPress={sendOtpRequest}
              isLoading={isLoading}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
