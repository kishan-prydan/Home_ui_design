import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Biometrics from 'react-native-biometrics';

const FingerprintAuthScreen = () => {
  const [isFingerprintEnabled, setIsFingerprintEnabled] = useState(false);

  useEffect(() => {
    checkFingerprintEnabled();
  }, []);

  const checkFingerprintEnabled = async () => {
    const { available, biometryType } = await Biometrics.isSensorAvailable();

    if (available && biometryType === 'TouchID') {
      setIsFingerprintEnabled(true);
    }
  };

  const handleFingerprintAuth = async () => {
    try {
      const { success } = await Biometrics.simplePrompt({
        promptMessage: 'Authenticate with your fingerprint',
      });

      if (success) {
        console.log('Fingerprint authentication successful.');
        // Proceed with app access
      } else {
        console.log('Fingerprint authentication failed.');
        // Handle authentication failure
      }
    } catch (error) {
      console.log('Fingerprint authentication error:', error);
      // Handle any errors
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fingerprint Authentication Example</Text>
      {isFingerprintEnabled && (
        <Button title="Authenticate with Fingerprint" onPress={handleFingerprintAuth} />
      )}
    </View>
  );
};

export default FingerprintAuthScreen;
