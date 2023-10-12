import React, {useState, useEffect, useRef} from 'react';
import {ImageBackground, Text, View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import TextInputWithLabel from '../../component/TextInputWithLabel/TextInputWithLabel';
import validator from '../../utils/validations';
import {showError, showSuccess} from '../../utils/helperFunction';
import actions from '../../redux/actions';
import ButtonWithLoader from '../../component/common/ButtonWithLoader';
import {LOGIN} from '../../constants/routeNames';

const OtpScreen = () => {
  const {navigate} = useNavigation();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [state, setState] = useState({
    isLoading: false,
    password: '',
    isSecure: true,
  });

  const {isLoading, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));
  const [errors, setErrors] = useState({});

  const otpInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (value, index) => {
    otp[index] = value;
    setOtp([...otp]);

    if (value) {
      if (index < otp.length - 1) {
        otpInputRefs[index + 1].current.focus();
      }
    } else {
      if (index > 0) {
        otpInputRefs[index - 1].current.focus();
      }
    }
  };

  useEffect(() => {
    validateForm();
  }, [otp, password]);

  const otpValue = otp.join('');

  const validateForm = () => {
    let errors = {};

    if (!otpValue) {
      errors.otp = 'OTP is required.';
    } else if (otpValue.length !== 6) {
      errors.otp = 'OTP must be 6 characters.';
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
      otp: otp.join(''),
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const sendOTP = () => {
    const otpValue = otp.join('');
    console.log('OTP Value:', otpValue);
  };

  const handleSubmit = async () => {
    const checkValid = isValidData();

    if (checkValid) {
      sendOTP();
      showSuccess('Password reset successful');
      navigate(LOGIN);
    }
  };

  const togglePasswordVisibility = () => {
    updateState({isSecure: !isSecure});
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imagePath.backgroundImage}
        style={styles.imgStyle}
      />

      <View style={styles.mainStyle}>
        <View style={styles.innerMainView}>
          <View style={styles.otpMainContainer}>
            <Text style={styles.header}>Enter the 6-digit OTP:</Text>
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <View key={index} style={styles.otpInputContainer}>
                  <TextInput
                    style={styles.otpInput}
                    value={digit}
                    onChangeText={text => handleChange(text, index)}
                    ref={otpInputRefs[index]}
                    maxLength={1}
                    keyboardType="numeric"
                  />
                </View>
              ))}
            </View>
            <Text style={styles.errorText}>{errors.otp}</Text>
          </View>
          <View style={styles.innerStyle}>
            <TextInputWithLabel
              placeHolder="New Password"
              name="password"
              secureTextEntry={isSecure}
              value={password}
              onChangeText={password => updateState({password})}
              rightIcon
              type={'fa6'}
              iconname={isSecure ? 'lock' : 'unlock'}
              onPressRight={togglePasswordVisibility}
            />
            <Text style={styles.errorText}>{errors.password}</Text>
          </View>

          <View style={styles.loginButtonContainer}>
            <ButtonWithLoader
              title="Reset Password"
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
