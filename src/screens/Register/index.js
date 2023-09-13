//import liraries
import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import RegisterComponent from './Register';

const Register = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <RegisterComponent />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
