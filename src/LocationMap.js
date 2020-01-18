import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground,
    View,
    TouchableHighlight,
    TextInput,
    Platform,
    Dimensions
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';

const {width, height} = Dimensions.get('window')


export default class LocationMap extends Component{
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
      },
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  componentWillMount(){
    this.mounted = true;
    if (this.mounted){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          const accuracy = position.coords.accuracy
          this.calcDelta(lat, lon, accuracy)
        },
        (error) => console.warn(error.message),
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
      )
    }else{
      this.mounted = false;
    }
    console.warn(this.state)
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  locateMe(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const accuracy = position.coords.accuracy
        this.calcDelta(lat, lon, accuracy)
      },
      (error) => console.warn(error.message),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    )
  }

  calcDelta(lat, lon, accuracy){
    const oneDegreeOfLongitudInMeters = 111.32;
    const circumference = (40075 / 360);

    const latDelta = accuracy  * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudInMeters);

    this.setState({
      region: {
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta
      }
    })
  }

  marker(){
    return {
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude
    }
  }

  render() {
    const buttons = ['Delivery', 'Pickup']
    const { selectedIndex } = this.state

    return (
        <ImageBackground source={require('./images/background.png')} style={styles.container}>
            <View style={styles.searchContainer}>
              <SearchBar
                round
                lightTheme
                inputStyle={styles.searchStyle}
                searchIcon={{ size: 15 }}
                showLoading
                //icon={{ type: 'Font-awesome', name: 'search' }}
                placeholder='Search Address'
                placeholderTextColor='white'
                containerStyle={styles.searchCon}
                />
            </View>
            <View>              
              <View style={styles.btntop}>
                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  selectedButtonStyle={styles.selectedButton}
                  containerStyle={{height: 30, width: 200}}
                  selectedTextStyle={styles.selectedText}
                  textStyle={styles.txtStyle}
                />
              </View>
              <View style={{alignItems: "center"}}>
                <TouchableHighlight onPress={this.locateMe()} style={styles.btnLocation}>
                  <Text style={styles.txtButton}>
                  <Icon name="ios-pin" size={15} color="#c52323" style={{marginRight: 10}}/>
                  Your Location</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.mapContainer}>
                { this.state.region.latitude ? <MapView
                style={styles.map}
                initialRegion={this.state.region}
                loadingEnabled = {true}
                >
                  <Marker
                    coordinate={this.marker()}
                    title = "I'm Here!"
                    description= "Address For Delivery"
                  />
                </MapView> : <Text style={{color: "white", fontSize: 20, alignContent: "center"}}>Ups! Location not found!</Text> }
              </View>
              <View style={styles.btnConfContainer}>
              { this.state.region.latitude ? 
                <TouchableHighlight style={styles.btnConfirmLocation}
                onPress={()=> this.props.navigation.navigate('RestaurantListScreen', {
                regionConfirmed: `${this.state.region}`,
              })}>
                  <Text style={styles.txtButton}>Confirm Location</Text>
                </TouchableHighlight> : null }
              </View>
            </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  searchContainer:{
    width: '90%',
    marginTop: '20%',
  },
  searchCon:{
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  searchStyle:{
    backgroundColor: '#c52323',
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 15,
    color: 'white'
  },
  btntop:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    //width: 200,
    //backgroundColor: 'blue'
  },
  selectedButton:{
    backgroundColor: '#c52323',
    
  },
  selectedText:{
    color: 'white',
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
  },
  txtStyle:{
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: '#c52323'
  },
  btnLocation:{
    width: 180,
    height: 30,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 15,
    color: '#c52323',
  },
  mapContainer:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    width: width,
    height: height / 2,
    //backgroundColor: "blue",
    marginTop: 10,
  },
  map: {
    width: width,
    height: height / 2,
  },
  btnConfContainer:{
    alignItems: 'center',
    //backgroundColor: "red"
  },
  btnConfirmLocation:{
    width: "70%",
    height: 35,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  }
});
