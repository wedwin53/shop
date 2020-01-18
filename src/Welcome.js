import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    Animated,
    TouchableHighlight,
    Platform
  } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class WelcomeView extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      animate: new Animated.Value(100),
      boton: new Animated.Value(0)
    }
    this.animateInterpolate = this.state.boton.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })
  }

  componentWillMount(){
    Animated.sequence([
      Animated.timing(this.state.animate, {
        toValue: -130,
        duration: 1000
      }),
      Animated.timing(this.state.boton, {
        toValue: 1,
        duration: 1000
      })
    ]).start()
    
  }


  render() {
    return (
        <ImageBackground source={require('./images/background.png')} style={styles.container}>
            <Animated.View style={styles.animatedV, {marginTop: this.state.animate}}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.welcome}>to ChopStix!</Text>
            </Animated.View>
            <Animated.View style={styles.animateB, {opacity: this.animateInterpolate}}>
                <TouchableHighlight onPress={()=> Actions.delivery()} style={styles.button}>
                  <Text style={styles.txtButton}>Start Order</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=> Actions.sign()} style={styles.buttonSign}>
                  <Text style={styles.txtButtonSign}>Sign in</Text>
                </TouchableHighlight>
            </Animated.View>
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
  welcome: {
    fontSize: 45,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20
  },
  animateB: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    display: 'none',
  },
  button: {
    width: 320,
    height: 60,
    backgroundColor: "white",
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
    color: '#c52323',
  },
  txtButtonSign: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
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
