import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {moderateVerticalScale} from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import CustomButton from '../../component/common/CustomButton';
import TextInputWithLabel from '../../component/TextInputWithLabel/TextInputWithLabel';
import {HOME} from '../../constants/routeNames';

const LoginComponent = () => {
  const {navigate} = useNavigation();

  const [code, setCode] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      validateForm();
    }
  }, [code, userName, password, clicked]);

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

  const handleSubmit = () => {
    if (isFormValid) {
      console.log(
        `Dealer code : ${code}, User Name : ${userName}, Password : ${password}}`,
      );
      Alert.alert('Login successfully!');
      setCode('');
      setUserName('');
      setPassword('');
      setClicked(false);
    } else {
      Alert.alert('All feilds are mandatory.');
      setClicked(true);
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
