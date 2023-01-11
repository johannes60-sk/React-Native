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
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { useState, useEffect } from 'react';

import style from './styles/global';

// const style = StyleSheet.create({
//   'text': {

//     'color': 'white', 
//     'backgroundColor': 'black'
//   }
// })

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  const [count, setCount] = useState(0);
  
  useEffect(() => {

    console.log("useEffect")
  }, [count]);

  onPressHandler = () => {
    setCount(count+1);
    console.log("Cliquer sur le bouton", count);
  }
  
  return (
    <>
    <View>
      <Text style={style.text}>Hello World</Text>
    </View>

    <View>

      <TouchableOpacity onPress = {onPressHandler}>

        <Text>Cliquer ici</Text>

      </TouchableOpacity>
    </View>

    <View>
      <Text style = {style.text}>{count}</Text>
    </View>

    </>
  );
};

export default App;
