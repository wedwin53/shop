import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    SafeAreaView,
    View,
    TouchableHighlight
  } from 'react-native';


export default class SignView extends Component<Props> {


  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <ImageBackground source={require('./images/background.png')} style={styles.container}>
            <View style={styles.animatedV}>
              <Text style={styles.welcome}>Welcome back!!</Text>
            </View>
            <View style={styles.animateB}>
                <TouchableHighlight onPress={()=> console.warn("Create Botton")} style={styles.button}>
                  <Text style={styles.txtButton}>Create Account</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=> console.warn("Forgot Password")} style={styles.buttonForgot}>
                  <Text style={styles.txtButton}>Forgot Password</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.singButtonContainer}>
                <TouchableHighlight onPress={()=> console.warn("Sign in")} style={styles.singButton}>
                  <Text style={styles.txtButton}>Sign in</Text>
                </TouchableHighlight>
            </View>
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
    fontSize: 30,
    fontFamily: 'aristotelica',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10,
    textAlign: 'center'
  },
  animatedV: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  animateB: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: 320,
    height: 60,
    backgroundColor: "#743c3c",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  txtButton: {
    fontFamily: 'aristotelica',
    fontSize: 25,
    color: 'white',
  },
  buttonForgot:{
    width: 320,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c52323",
  },
  singButtonContainer: {
    flex: 2
  },
  singButton:{

  }
});
