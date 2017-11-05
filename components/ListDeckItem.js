import React, { Component } from 'react';
import {View, Text, TouchableHighlight,StyleSheet } from 'react-native';
import {black,red,white,grey} from '../utils/colors';


class ListDeckItem extends Component {

    constructor(props){
        super(props);
    }

    pressed = (id) =>{
        console.log('push: ',id);
        this.props.navigation.navigate('Deck');
    }

    render() {
        return (
        <TouchableHighlight style={styles.item} key={this.props.id} onPress={()=>this.pressed(this.props.id)}>
            <View style={styles.container}>
                <Text style={styles.title} >{this.props.title}</Text>
                <Text style={styles.nCards}>{this.props.nCards} cards</Text>
            </View>
        </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: red,
    alignItems: 'center',    
    padding: 22,
    borderBottomWidth: 1,
    borderBottomColor: white    
  },
  container:{
      
      justifyContent: 'space-between',
      alignItems:'center'    
  },
  title:{
      fontSize:22,
      color:white
  },
  nCards:{
      fontSize:12,
      color:white,
      textAlign:'right'
  }
});

export default ListDeckItem;