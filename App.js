import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    SafeAreaView,
    Dimensions,
    Animated,
    TouchableHighlight
  } from 'react-native';
import WelcomeView from './src/Welcome';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <WelcomeView />
    );
  }
}

