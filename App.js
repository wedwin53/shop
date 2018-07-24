import React, {Component} from 'react';
import {
    StyleSheet
  } from 'react-native';
import WelcomeView from './src/Welcome';
import SignView from './src/Sign';
import { Router, Scene } from 'react-native-router-flux';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
        <Scene key="root">
          <Scene 
          key="welcome"
          component={WelcomeView}
          initial
          hideNavBar
          />
          <Scene 
          key="sign"
          component={SignView}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar:{
    backgroundColor: 'transparent',
  }
});