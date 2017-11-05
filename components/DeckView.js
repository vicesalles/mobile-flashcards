import React, { Component } from 'react';
import {View, Text, TouchableHighlight,StyleSheet } from 'react-native';
import * as colors from '../utils/colors';

class DeckView extends Component{

    goQuiz = (id) =>{
      this.props.navigation.navigate('Quiz');
    }

    createCard = (deck) =>{
       this.props.navigation.navigate('AddCard');
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.description}>
                    <Text style={styles.title}>This is Title</Text>
                    <Text style={styles.nCards}>this is n cards</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={[styles.quiz,styles.button]} onPress={this.goQuiz}><Text style={[styles.quizText,styles.textButton]}>Quiz</Text></TouchableHighlight>
                    <TouchableHighlight style={[styles.addCard,styles.button]} onPress={this.createCard} ><Text style={styles.textButton}>Add Card</Text></TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    title:{
        color: colors.black,
        fontSize: 25
    },
    nCards:{
        color: colors.grey,
        fontSize: 12
    },
    description:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:50
    },
    button:{
        padding:5,
        paddingRight:10,
        paddingLeft:10,
        marginTop:20
    },
    textButton:{
        fontSize:18
    },
    quiz:{
        backgroundColor: colors.black,
        borderRadius: 8
        
    },
    quizText:{
        color: colors.white
    },

    addCard:{
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 8
    },
    buttonContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});

export default DeckView;