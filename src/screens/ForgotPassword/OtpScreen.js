import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import TextInputWithLabel from '../../component/TextInputWithLabel/TextInputWithLabel';
import validator from '../../utils/validations';
import {showError, showSuccess} from '../../utils/helperFunction';
import actions from '../../redux/actions';
import ButtonWithLoader from '../../component/common/ButtonWithLoader';
import {LOGIN} from '../../constants/routeNames';
import PropTypes from 'prop-types';

const OtpScreen = () => {
  const {navigate} = useNavigation();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [state, setState] = useState({
    isLoading: false,
    password: '',
    confirmPassword: '',
  });

  const {isLoading, password, confirmPassword} = state;
  const updateState = data => setState(() => ({...state, ...data}));
  const [errors, setErrors] = useState({});
  const [isNewPasswordSecure, setIsNewPasswordSecure] = useState(true);
  const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);

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

  const handleOTPPaste = text => {
    const sanitizedText = text.replace(/\D/g, '');
    if (sanitizedText.length === otp.length) {
      sanitizedText.split('').forEach((value, index) => {
        otpInputRefs[index].current.setNativeProps({text: value});
        otp[index] = value;
      });
      setOtp([...otp]);
    }
  };

  useEffect(() => {
    validateForm();
  }, [otp, password, confirmPassword]);

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
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is required.';
    } else if (confirmPassword.length < 6) {
      errors.confirmPassword =
        'Confirm Password must be at least 6 characters.';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Confirm Password must match the New Password.';
    }

    setErrors(errors);
  };

  const isValidData = () => {
    const error = validator({
      otp: otp.join(''),
      password,
      confirmPassword,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    let params = {
      otp: otpValue,
      newPassword: password,
      conformpPassword: confirmPassword,
    };

    const checkValid = isValidData();

    if (checkValid) {
      updateState({isLoading: true});
      try {
        const res = await actions.resetPassword(params);
        !!res
          ? showSuccess(res.message)
          : showSuccess('Password changed successfully');
        // console.log('Getting response from api : ',res);
        updateState({isLoading: false});
        navigate(LOGIN);
      } catch (error) {
        showError(error.message);
        updateState({isLoading: false});
      }
    }
  };

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordSecure(!isNewPasswordSecure);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordSecure(!isConfirmPasswordSecure);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={imagePath.backgroundImage} style={styles.imgStyle} />

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
                    onPaste={e =>
                      handleOTPPaste(
                        e.nativeEvent.clipboardData.getData('Text'),
                      )
                    }
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
              secureTextEntry={isNewPasswordSecure}
              value={password}
              onChangeText={password => updateState({password})}
              rightIcon
              type={'fa6'}
              iconname={isNewPasswordSecure ? 'lock' : 'unlock'}
              onPressRight={toggleNewPasswordVisibility}
            />
            <Text style={styles.errorText}>{errors.password}</Text>
          </View>
          <View style={styles.innerStyle}>
            <TextInputWithLabel
              placeHolder="Confirm Password"
              name="confirmPassword"
              secureTextEntry={isConfirmPasswordSecure}
              value={confirmPassword}
              onChangeText={confirmPassword => updateState({confirmPassword})}
              rightIcon
              type={'fa6'}
              iconname={isConfirmPasswordSecure ? 'lock' : 'unlock'}
              onPressRight={toggleConfirmPasswordVisibility}
            />
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
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
    </ScrollView>
  );
};

OtpScreen.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default OtpScreen;
