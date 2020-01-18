import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView
 } from 'react-native';
 import { Actions } from 'react-native-router-flux';
 import { StackNavigator } from 'react-navigation';
 import RestaurantListScreen from './RestaurantListScreen';
 import RestDetailsScreen from './RestDetailsScreen';
 import RestaurantItem from './RestaurantItem';

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

const AppStackNavigator = StackNavigator (
  {
    List: RestaurantListScreen,
    RestaurantItem: RestaurantItem,
    RestaurantDetails: RestDetailsScreen
  },
  {
    initialRouteName: 'List',
  }
);

const styles = StyleSheet.create({

})