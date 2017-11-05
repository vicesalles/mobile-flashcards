import React, { Component } from 'react';
import {View, Text, TouchableHighlight,StyleSheet } from 'react-native';
import * as colors from '../utils/colors';

class DeckView extends Component{
    render(){
        return(
            <View>
                <View>
                    <Text style={styles.title}>This is Title</Text>
                    <Text style={styles.nCards}>this is n cards</Text>
                </View>
                <View>
                    <TouchableHighlight><Text style={styles.quiz}>Quiz</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.addCard}><Text>Add Card</Text></TouchableHighlight>
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
    quiz:{
        backgroundColor: colors.black
    },
    addCard:{
        borderColor: colors.black,
        borderWidth: 1
    }

});

export default DeckView;