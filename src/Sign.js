import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    SafeAreaView,
    View,
    TouchableHighlight,
    TextInput,
    Platform
  } from 'react-native';
import { Actions } from 'react-native-router-flux'


export default class SignView extends Component<Props> {

  state = {
    text: '',
    password: ''
  }

  render() {
    return (
        <ImageBackground source={require('./images/background.png')} style={styles.container}>
            <View style={styles.animatedV}>
              <Text style={styles.welcome}>Welcome back!!</Text>
            </View>
            <View style={styles.txtContainer}>
            <TextInput
              style={styles.txtInput}
              placeholder="E-mail:"
              placeholderTextColor="#c52323"
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              maxLength={30}
            />
            <TextInput
              style={styles.txtInput}
              placeholder="Password:"
              placeholderTextColor="#c52323"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry={true}
              maxLength={30}
            />
            </View>
            <View style={styles.botoneraCont}>
                <TouchableHighlight onPress={()=> Actions.createAccount()} style={styles.button}>
                  <Text style={styles.txtButton}>Create Account</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=> Actions.forgotPassword()} style={styles.buttonForgot}>
                  <Text style={styles.txtButton}>Forgot Password</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.singButtonContainer}>
                <TouchableHighlight onPress={()=> alert("Sign in")} style={styles.singButton}>
                  <Text style={styles.txtButton}>Sign in</Text>
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
  safeContainer:{
    flex: 1,
    backgroundColor: 'transparent',
  },
  welcome: {
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
  animatedV: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  botoneraCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    width: '45%',
    height: 55,
    backgroundColor: "#c52323",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 20,
    color: 'white',
  },
  buttonForgot:{
    width: '45%',
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7c6b6b",
    marginLeft: 5,    
  },
  singButtonContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
  },
  singButton:{
    width: '45%',
    height: 55,
    backgroundColor: "#743c3c",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    width: '100%'
  },
  txtInput:{
    fontSize: 19,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: '#c52323',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    height: 50,
    borderColor: 'black',
    marginBottom: 5,
    padding: 6,
  }
});
