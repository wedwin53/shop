import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ListItem, List, Icon, CheckBox } from 'react-native-elements';

class CardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      propObj: ""
    };
  }

  componentDidMount(){
    this.setState({ propObj: this.props })
  }

  render() {  
    return (
        <Card titleStyle={styles.titleCard} title="Lunch Specials" containerStyle={styles.card}>
              <ListItem
              titleStyle={styles.titleItem}
              title={this.props.itemMenuName}
              subtitle={
              <View>
                <Text style={styles.optionalDesc}>Optional Description</Text>
              </View>
            }
            //rightTitle={"$" + this.props.itemMenuPrice}
              rightIcon={
              <CheckBox
                containerStyle={{borderColor: "transparent", backgroundColor: "transparent"}}
                iconRight
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                title={"$" + this.props.itemMenuPrice}
                checked={this.state.checked}
                checkedColor='red'
                onIconPress={() => !this.state.checked ? this.setState({ checked: true }) : this.setState({ checked: false })}
              />
            }
            //onPressRightIcon={()=> alert("Press On")}
            />
      </Card>
    );
  } // render
} // class

const styles = StyleSheet.create({
    containerList:{
    backgroundColor:'white', 
    borderRadius:8,
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    },
    tab:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    },
    card:{
    borderRadius: 5,
    marginBottom: 10,
    },
    titleCard:{
    fontSize: 15,
    color: '#8e8e93'
    },
    titleItem:{
    color: '#8e8e93',
    fontSize: 15,
    },
    optionalDesc:{
      fontSize: 12,
      color: '#8e8e93'
    }
})

export default CardMenu;
