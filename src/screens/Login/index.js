//import liraries
import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import LoginComponent from './Login';

const Login = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <LoginComponent />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
