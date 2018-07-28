import React, { Component } from 'react';
import { 
    View,
    Text
} from 'react-native';

import { 
    Container,
    Header,
    Item,
    Input 
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class RestaurantListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
      headerLeft: <Icon name="rocket" size={30} color="#e74c3c" />,
      title: "Pick up near 10001",
      headerRight: <Icon name="user" size={30} />
  }

  render() {
    return (
        <View>
            <Text>Prueba Text</Text>
            <Icon name="user" size={30} color="#e74c3c" />
        </View>
    );
  }
}
