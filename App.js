import React, { Component } from 'react';
import {
    StyleSheet
  } from 'react-native';
  import { Provider } from 'react-redux';
  import { PersistGate } from 'redux-persist/integration/react';
  import { store, persistor } from './store';
  
import WelcomeView from './src/Welcome';
import SignView from './src/Sign';
import CreateAccountView from './src/CreateAccountView';
import ForgotPassView from './src/ForgotPassView';
import DeliveryView from './src/DeliveryView';
import LocationView from './src/LocationView';
import { Router, Scene, Stack } from 'react-native-router-flux';
import MainView from './src/Main';
import LocationMap from './src/LocationMap';


type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Provider
        store={store}
      >
        <Router>
          <Stack key="root">
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
            <Scene 
            key="forgotPassword"
            component={ForgotPassView}
            navTransparent
            />
            <Scene 
            key="delivery"
            component={DeliveryView}
            navTransparent
            />
            <Scene 
            key="location"
            component={LocationView}
            navTransparent
            />
            <Scene 
            key="locationmap"
            component={LocationMap}
            navTransparent
            />
            <Scene 
            key="main"
            component={MainView}
            hideNavBar
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navBar:{
    backgroundColor: 'transparent',
  }
});