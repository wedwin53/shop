import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    SafeAreaView,
    View,
    TouchableHighlight
  } from 'react-native';
import { Actions } from 'react-native-router-flux'


export default class SignView extends Component<Props> {


  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <ImageBackground source={require('./images/background.png')} style={styles.container}>
            <View style={styles.animatedV}>
              <Text style={styles.welcome}>Welcome back!!</Text>
            </View>
            <View style={styles.botoneraCont}>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  botoneraCont: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingRight: 5,
  },
  button: {
    width: '50%',
    height: 60,
    backgroundColor: "#743c3c",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
    //marginTop: 20,
    //marginBottom: 10,
  },
  txtButton: {
    fontFamily: 'aristotelica',
    fontSize: 22,
    color: 'white',
  },
  buttonForgot:{
    width: '50%',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c52323",
    marginLeft: 2,    
  },
  singButtonContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
  },
  singButton:{
    width: '50%',
    height: 60,
    backgroundColor: "#743c3c",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
