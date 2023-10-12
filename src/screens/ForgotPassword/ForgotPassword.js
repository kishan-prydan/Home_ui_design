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
import TextInputWithLabel from '../../component/TextInputWithLabel/TextInputWithLabel';
import validator from '../../utils/validations';
import {showError, showSuccess} from '../../utils/helperFunction';
import actions from '../../redux/actions';
import ButtonWithLoader from '../../component/common/ButtonWithLoader';
import {LOGIN, OTPSCREEN} from '../../constants/routeNames';

const ForgotPassword = () => {
  const {navigate} = useNavigation();

  const [state, setState] = useState({
    isLoading: false,
    userName: 'kishan@prydan.com',
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
    try {
      // const response = await axios.post('', {
      //   userName: userName,
      // });

      // console.log('API Response:', response.data);
      console.log('API Response:', userName);

      showSuccess('Otp has been successfully sent to your registered email id');
      navigate(OTPSCREEN);
    } catch (error) {
      console.error('API Error:', error);
      showError('Failed to send OTP. Please try again.');
    }
  };

  const handleSubmit = async () => {
    const checkValid = isValidData();

    if (checkValid) {
      sendOtpRequest();
    }
  };

  return (
    <View style={styles.container}>
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
              onPress={() => navigate(LOGIN)}>
              <Text style={styles.forgotText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginButtonContainer}>
            <ButtonWithLoader
              title="Get OTP"
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
