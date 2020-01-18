import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    View,
    TouchableHighlight,
    Platform
  } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class DeliveryView extends Component<Props> {
  constructor(){
    super()
    this.state = {
      
      
    }
  }



  render() {
    return (
        <ImageBackground source={require('./images/background.png')} style={styles.container}>
            <View style={styles.tittleContainer}>
              <Text style={styles.tittletxt}>How do you want you food?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={()=> Actions.location()} style={styles.button}>
                  <Text style={styles.txtButton}>Delivery</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=> Actions.main()} style={styles.buttonPick}>
                  <Text style={styles.txtButtonPick}>Pick up</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tittletxt: {
    fontSize: 25,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10,
    textAlign: 'center'
  },
  tittleContainer: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 120,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: 320,
    height: 60,
    backgroundColor: "#c52323",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 25,
    color: 'white',
  },
  txtButtonPick: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 25,
    color: '#c52323',
  },
  buttonPick:{
    width: 320,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  }

});
