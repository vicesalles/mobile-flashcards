import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import ListDeckItem from './ListDeckItem';

class MainList extends Component{
    render(){
        return(
            <View>
                <FlatList data={this.props.items} renderItem={({item})=><ListDeckItem key={item.id} {...item}/>}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
  });

export default MainList;