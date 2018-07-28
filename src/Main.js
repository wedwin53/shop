import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView
 } from 'react-native';
 import { Actions } from 'react-native-router-flux';
 import { StackNavigator } from 'react-navigation';
 import RestaurantListScreen from './RestaurantListScreen'

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator ({
  Main:{
    screen: RestaurantListScreen
  }
})

const styles = StyleSheet.create({

})