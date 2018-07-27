import React, {Component} from 'react';
import {
    StyleSheet
  } from 'react-native';
import WelcomeView from './src/Welcome';
import SignView from './src/Sign';
import CreateAccountView from './src/CreateAccountView';
import { Router, Scene } from 'react-native-router-flux';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Router>
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
          navTransparent
          />
          <Scene 
          key="createAccount"
          component={CreateAccountView}
          navTransparent
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