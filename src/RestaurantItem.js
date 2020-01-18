import React, { Component } from 'react';
import {
    Text,
    View, 
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import RestDetailsScreen from './RestDetailsScreen'

export default class RestaurantItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_uri: 'https://staticc04.insing.com/images/02/f6/10/00/pc_600x450.jpg'
    };
  }

  render() {
    return (

        <View style={styles.container}>
          <View style={styles.left}>
            <Image
              style={styles.cover}
              source={{
                uri: this.props.imageUrl
              }}
            />
          </View>
          <View style={styles.right}>
              <View>  
                <Text style={styles.title}>{this.props.restaurantName}</Text>
              </View>
              <View style={styles.rightSubContainer}>
                <View style={styles.addressContainer}>
                  <Text style={styles.addressItem}>{this.props.address_street}</Text>
                  <Text style={styles.addressItem}>{this.props.address_city}</Text>
                  <Text style={styles.deliveryTime}>{this.props.restaurantsDeliveryTime}</Text>
                </View>
                <View style={styles.distanceContainer}>
                  <Text style={styles.distance}>{this.props.restaurantDistance}</Text>
                </View>
              </View>
          </View>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cover: {
    height: 110,
    width: 110,
    resizeMode: "cover",
    borderRadius: 8,
    paddingHorizontal: 10,
    
  },
  left:{
    alignItems: 'center',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    width: '70%'
  },
  title: {
    fontSize: 16,
    color: '#8e8e93'
  },
  rightSubContainer:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  addressContainer:{
    flex: 1,
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  distanceContainer:{
    justifyContent: 'flex-end',
    width: '20%',
    height: '100%'
  },
  addressItem:{
    fontSize: 13,
    color: '#8e8e93'
  },
  deliveryTime: {
    backgroundColor: '#ff2d55',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  distance:{
    fontSize: 11,
    color: '#8e8e93',
    marginBottom: 15,
    
  }

})