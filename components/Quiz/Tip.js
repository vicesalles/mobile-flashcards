import React from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as colors from '../../utils/colors';

function Tip (props){

    goBack = () =>{

        props.navigation.navigate('Qt');

    }
    return(<View style={styles.container}>
        <Text style={styles.tip}>{props.tip}</Text>
        <TouchableHighlight onPress={this.goBack} style={styles.okButton}>
            <Text style={styles.btText}>Ok</Text>
        </TouchableHighlight>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    okButton:{
        padding:20,
        paddingRight:10,
        paddingLeft:10,
        marginTop:5,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.red
    },
    btText:{
        color:colors.white,
        fontSize:25
    },
    tip:{
        fontSize:35
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