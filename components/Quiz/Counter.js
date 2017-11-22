import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import * as colors from '../../utils/colors';
import { connect } from 'react-redux';

function Counter(props){
    return(
        <View><Text>{props.current}/{props.total}</Text></View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    myText:{
        fontSize:22
    }
})

function mapStateToProps(state){
    
    const deck = state.decks.filter((d)=>d.title===state.currentDeck);
    const total = deck[0].cards.length;
    const current = state.currentQuestion+1>total?total:state.currentQuestion+1;
    
    
    return {current,total};
}

export default connect(mapStateToProps)(Counter);