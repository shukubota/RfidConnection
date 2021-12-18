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
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NativeModules,
  NativeEventEmitter,
  EmitterSubscription,
} from 'react-native';
// const {RfidModule} = NativeModules;
import RfidModule from './RfidModule';

const Section: React.FC = () => {
  const [eventListner, setEventListner] = React.useState<EmitterSubscription | null>(null);
  const onPress = useCallback(() => {
    console.log('onclicka');
    console.log({ NativeModules });
    console.log({ RfidModule });
    const a = RfidModule.setName('params');
    console.log({a});
  }, []);

  React.useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.RfidModule);
    setEventListner(eventEmitter.addListener('discoveredDevice', (event) => {
      console.log(event.eventProperty) // "someValue"
    }));
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.eventButton}>
        <Text>ボタン</Text>
      </TouchableOpacity>
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
    backgroundColor: 'green',
    width: '80%',
    alignContent: 'center',
    margin: 'auto',
    height: 30,
  },
});

export default App;
