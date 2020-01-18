import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Platform,
    FlatList,
    StyleSheet,
} from 'react-native';

import {
    Container,
    Header,
    Item,
    Input,
    Card,
    CardItem
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBar, List } from 'react-native-elements';
import Separator from './vertical-separator';
import Empty from './empty';
import { getRest } from '../utils/api';
import RestaurantItem from './RestaurantItem';
import { connect } from 'react-redux';

export default class RestaurantListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: [],
      errData: null
    };
  }

  componentDidMount(){
    
    getRest()
    .then(data => this.setState({ restaurantList: data }))
    .catch(err => this.setState({ errData: "Someting Wrong, Please Check your Internet conection" }))

  }



  keyExtractor = item => item.restaurantID.toString()
  renderEmtpy = () => <Empty text={this.state.errData} />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('RestaurantDetails', {
        restName: `${item.restaurantName}`,
        restID: `${item.restaurantID}`
      })
      }>
      <RestaurantItem
        {...item}
      />
      </TouchableOpacity>
    )
  }


  static navigationOptions = {
      headerLeft: <TouchableOpacity onPress={()=> alert("Button Person")}><Icon name="ios-contact" size={25} color="#ff2d55" style={{paddingLeft: 10}}/></TouchableOpacity>,
      title: "Pickup near 10000",
      headerTitleStyle: {
            fontFamily: Platform.select({
              ios: 'Aristotelica Text',
              android:'aristotelica',
            }),
            color: "#ff2d55",
            fontSize: 15,
            flex: 1,
            textAlign: 'center'
        },
      headerRight: <Icon name="ios-cart-outline" size={25} color="#ff2d55" style={{paddingRight: 10}}/>
  }

  render() {
    
    return (
    <View>
        <View>
          <SearchBar
            round
            lightTheme
            inputStyle={{backgroundColor: '#ededee'}}
            searchIcon={{ size: 15 }}
            placeholder='Search Menu' />
        </View>
        <List containerStyle={styles.containerList}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.restaurantList}
            ListEmptyComponent={this.renderEmtpy}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
            extraData={this.state}
          />
        </List>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  containerList:{
    backgroundColor:'white', 
    borderRadius:8,
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    borderTopColor: 'transparent',
  }
})