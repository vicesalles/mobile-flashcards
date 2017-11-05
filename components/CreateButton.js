import React, { Component } from 'react';
import {View, Text, TouchableHighlight,StyleSheet } from 'react-native';
import {black,red,white,grey} from '../utils/colors';

class CreateButton extends Component {

    pressed = () =>{
        console.log('push create');
    }

    render() {
        return (
        <TouchableHighlight style={styles.item} key={this.props.id} onPress={this.pressed}>
           <Text style={styles.title}>Create NEW Deck</Text>
        </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: black,
    alignItems: 'center',    
    padding: 16,    
    borderBottomColor: white    
  },
  title:{
      fontSize:22,
      color:white,
      textAlign:'center'
  }
});

export default CreateButton;