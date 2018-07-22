import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    SafeAreaView,
    Dimensions,
    Animated,
    TouchableHighlight,
    View
  } from 'react-native';
import { red } from 'ansi-colors';


type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super()
    this.state = {
      animateXY: new Animated.ValueXY({ x:0, y:0 })
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <ImageBackground source={require('./src/images/background.png')} style={styles.container}>
            <Animated.View style={styles.animatedV}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.welcome}>to ChopStix!</Text>
            </Animated.View>
            <Animated.View style={styles.animateB}>
                <TouchableHighlight onPress={()=> console.warn("Boton Order")} style={styles.button}>
                  <Text style={styles.txtButton}>Start Order</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=> console.warn("Boton Sign")} style={styles.buttonSign}>
                  <Text style={styles.txtButton}>Sign in</Text>
                </TouchableHighlight>
            </Animated.View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  safeContainer:{
    flex: 1,
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 45,
    fontFamily: 'aristotelica',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10
  },
  animatedV: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animateB: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    //display: 'none',
  },
  button: {
    width: 320,
    height: 60,
    backgroundColor: "#743c3c",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtButton: {
    fontFamily: 'aristotelica',
    fontSize: 25,
    color: 'white',
  },
  buttonSign:{
    width: 320,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c52323",
  }

});
