import React from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

function Tip (props){

    goBack = () =>{

        props.navigation.navigate('Qt');

    }
    return(<View style={styles.container}>
        <Text>{props.tip}</Text>
        <TouchableHighlight onPress={this.goBack}>
            <Text>Ok</Text>
        </TouchableHighlight>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

function mapStateToProps(state){
    //Getting current deck
    const deck = state.decks.filter((d)=>d.title===state.currentDeck);
    const current = state.currentQuestion;
    //Avoiding Quiz reset error
    const tip =  state.quizEnded ? '...' : deck[0].cards[current].tip ;
    return {tip};
}

export default connect(mapStateToProps)(Tip);