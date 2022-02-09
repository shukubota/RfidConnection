/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback} from 'react';
import {Tracker} from '@react-native-karte/core';
import {appleAuth, AppleButton} from '@invertase/react-native-apple-authentication';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RfidModule from './RfidModule';

const Section: React.FC = () => {
  const onPress = useCallback(() => {
    console.log('onPress');
    RfidModule.login('parsams', 'locationparams');
  }, []);

  const onPressKarte = useCallback(() => {
    console.log('onPressKarte');
    Tracker.track('favorite', {
      id: 'P00003',
      name: 'ミネラルウォーター（500ml）',
      price: 100,
    });
  }, []);

  React.useEffect(() => {
    console.log('useeffect');
  }, []);

  const onPressAppleLoginButton = useCallback(async () => {
    console.log('applelogin');
    const appleAuthRes = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    console.log({appleAuthRes});
    // const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRes.user);
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.eventButton}>
        <Text style={styles.buttonText}>NativeModule呼び出し</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressKarte} style={styles.eventButton}>
        <Text style={styles.buttonText}>karte</Text>
      </TouchableOpacity>
      <View>
        <AppleButton
          buttonStyle={AppleButton.Style.WHITE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={{
            width: 160, // You must specify a width
            height: 45, // You must specify a height
          }}
          onPress={onPressAppleLoginButton}
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView>
      <Section />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  eventButton: {
    width: '80%',
    alignContent: 'center',
    margin: 'auto',
    height: 30,
    fontSize: '50px',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default App;
