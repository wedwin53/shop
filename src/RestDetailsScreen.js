import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Platform,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBar, Card, List } from 'react-native-elements';
import { getMenu } from '../utils/api';
import RestaurantItem from './RestaurantItem';
import { connect } from 'react-redux';
import CardMenu from './CardMenu';
import Separator from './vertical-separator';
import Empty from './empty';

export default class RestDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RestaurantList: [],
      Menu: [],
      errData: null,
    };
  }

  componentDidMount(){
    let restID = 1; //this.props.navigation.state.params.restID
    getMenu(restID)
    .then(data => this.setState({ Menu: data }))
    .catch(err => this.setState({ errData: "Someting Wrong, please Check your Internet conection" }))
    //console.warn("Restaurant ID Selected: " + this.props.navigation.state.params.restID)
  
  }


  keyExtractor = item => item.itemMenuId.toString()
  renderEmtpy = () => <Empty text={this.state.errData} />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return (
      <CardMenu
        {...item}
      />
    )
  }

  static navigationOptions = ({ navigation }) => ({
      //headerLeft: <TouchableOpacity onPress={()=> alert("Button Person")}><Icon name="ios-contact" size={25} color="#ff2d55" style={{paddingLeft: 10}}/></TouchableOpacity>,
      headerTitle: `${navigation.state.params.restName}`,
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
  });

  render() {
    
    return (
      <View>
        <View>
          <SearchBar
            round
            lightTheme
            inputStyle={{backgroundColor: '#ededee'}}
            icon={{ type: 'Font-awesome', name: 'search' }}
            placeholder='Search Menu' />
        </View>
        <List containerStyle={styles.containerList}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.Menu}
            ListEmptyComponent={this.renderEmtpy}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
            extraData={this.state}
          />
        </List>
        <View style={styles.btnBContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.txtButton}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
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
  },
  tab:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  card:{
    borderRadius: 5,
  },
  titleCard:{
    fontSize: 15,
    color: '#8e8e93'
  },
  titleItem:{
    color: '#8e8e93'
  },
  btnBContainer:{
    //flex: 1,
    justifyContent: "flex-end",
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
    height: 55
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#c52323",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 22,
    color: 'white',
  },

})