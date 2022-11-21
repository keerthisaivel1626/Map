import React from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Keychain from 'react-native-keychain';

const PIN_CODE = '1234';

async function verifyIfSensorIsAvailable() {
  const biometryType = await Keychain.getSupportedBiometryType();
  if (
    biometryType === Keychain.BIOMETRY_TYPE.TOUCH_ID ||
    biometryType === Keychain.BIOMETRY_TYPE.FACE_ID ||
    biometryType === Keychain.BIOMETRY_TYPE.FINGERPRINT
  ) {
    return true;
  }
  return false;
}

async function setCredentials() {
  if (verifyIfSensorIsAvailable()) {
    try {
      const result = await Keychain.setGenericPassword('pincode', PIN_CODE, {
        accessControl:
          Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
        accessible: Keychain.ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
        authenticationType:
          Keychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
        authenticationPrompt: {
          title: 'Login Biometric',
          subtitle: 'Login Biometric',
        },
      });
      console.log('RESULT SAVED', result);
    } catch (error) {
      console.error('Biometric Erro Set Credentials:', error);
    }
  }
}

async function getCredentials() {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log('CREDENTIALS RESULTS 😎', credentials);
    }
  } catch (error) {
    console.error('Biometric Erro Get Credentials:', error);
  }
  await Keychain.resetGenericPassword();
}

function loginByBiometric() {
  if (verifyIfSensorIsAvailable()) {
    getCredentials();
  }
}

function Login() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.viewContainer}>
          <Text>React Native App Test</Text>
          <Button onPress={setCredentials} title="Autorize Biometric Login" />
          <Button onPress={loginByBiometric} title="Test Biometric Login" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 30,
  },
});

export default Login;
