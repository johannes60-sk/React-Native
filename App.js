/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const style = StyleSheet.create({
  'text': {

    'color': 'white', 
    'backgroundColor': 'black'
  }
})

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  
  return (
    
    <View>
      <Text style={style.text}>Hello World</Text>
    </View>
  );
};

export default App;
