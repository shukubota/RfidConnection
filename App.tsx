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
} from 'react-native';
import RfidModule from './RfidModule';

const Section: React.FC = () => {
  const onPress = useCallback(() => {
    console.log('onPress');
    RfidModule.login('parsams', 'locationparams');
  }, []);

  React.useEffect(() => {
    console.log('useeffect')
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
