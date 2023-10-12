//import liraries
import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import LoginComponent from './Login';
import WebLogin from './WebLogin';

const Login = () => {
  if (Platform.OS === 'web') {
    return <WebLogin />;
  } else {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <LoginComponent />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
};

export default Login;
