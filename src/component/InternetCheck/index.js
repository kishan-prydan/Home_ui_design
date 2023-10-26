// InternetCheck.js
import React, { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

const InternetCheck = ({ onInternetCheck }) => {
  useEffect(() => {
    NetInfo.fetch().then(async (state) => {
      onInternetCheck(state.isConnected);
    });
  }, []);

  return null;
};

export default InternetCheck;
