import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';

import ListDeckItem from './ListDeckItem';




class MainList extends Component{

    state ={
        decks: [{title:'React JS',id:0, nCards:5},
        {title:'React Native',id:1, nCards:4},
        {title:'Redux',id:2, nCards:8},
        {title:'Express',id:3, nCards:8},
        {title:'Socket.io',id:4, nCards:8},
        {title:'MongoDB',id:5, nCards:8},
        {title:'Passport.js',id:6, nCards:1}]
    }
    
    render(){
      
        return(
            <View>
                <FlatList
                data={this.state.decks} 
                renderItem={({item})=><ListDeckItem navigation={this.props.navigation} key={item.id} {...item}/>}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
  });

export default MainList;