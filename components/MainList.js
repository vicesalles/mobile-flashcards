import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ListDeckItem from './ListDeckItem';
import {needSampleData} from '../actions';




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

    componentDidMount(){
        console.log('Redux running?',this.props);
        console.log('baralles', this.props.state.decks.length)
        if(this.props.state.decks.length===0){
            needSampleData();           
        }
    }
    
    render(){
        
        return(
            <View>
                <FlatList
                data={this.props.state.decks} 
                renderItem={({item})=><ListDeckItem navigation={this.props.navigation} {...item}/>}
                keyExtractor={(item, index) => index}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
  });

function mapStateToProps(state){
    return{state}
}


export default connect(mapStateToProps)(MainList);