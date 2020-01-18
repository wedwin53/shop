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
    email: '',
    phone: '',
  }

  render() {
    return (
        <ImageBackground source={require('./images/background.png')} style={styles.container}>
            <View style={styles.tittleContainer}>
              <Text style={styles.glad}>We'll send a password</Text>
              <Text style={styles.glad}>reset link to the email or</Text>
              <Text style={styles.glad}>phone provided</Text>
            </View>
            <View style={styles.txtContainer}>
            <TextInput
              style={styles.txtInput}
              placeholder="E-mail:"
              placeholderTextColor="#c52323"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              maxLength={30}
            />
            <Text style={styles.orTag}>Or</Text>
            <TextInput
              style={styles.txtInput}
              placeholder="Phone Number:"
              placeholderTextColor="#c52323"
              onChangeText={(phone) => this.setState({phone})}
              value={this.state.phone}
              maxLength={30}
            />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={()=> console.warn("Submit Button")} style={styles.buttonSubmit}>
                  <Text style={styles.txtButton}>Submit</Text>
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
  glad: {
    fontSize: 22,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10,
    textAlign: 'center',
  },
  tittleContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 20
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 20,
    color: 'white',
  },
  buttonSubmit:{
    width: '45%',
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c52323",
    marginTop: 10,
    marginLeft: 2,    
  },
  txtContainer:{
    flex: 0,
    justifyContent:'flex-start',
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
    width: '85%',
    height: 50,
    borderColor: 'black',
    marginBottom: 5,
    padding: 6,
  },
  orTag: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    paddingVertical: 5,
    color: 'black',
    fontSize: 15
  }
});
