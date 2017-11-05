import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import * as colors from '../utils/colors';

class CreateDeck extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.title}>Create a NEW deck</Text>  
                
                    <View style={styles.row}>
                        <Text stlye={styles.label}>Title</Text>              
                        <TextInput style={styles.input}/>
                        <TouchableHighlight style={styles.button}>
                            <Text style={{color:colors.white}}>Create</Text>
                        </TouchableHighlight>
                    </View>
                   
                
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:colors.white
    },
    title:{
        fontSize:22,
        textAlign:'center'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        flex:1
    },
    input:{
        flex:2,
        fontSize:16,
        paddingLeft:10,
        paddingRight:10
    },
    label:{
        flex:1,
        fontSize:16
    },
    button:{
        backgroundColor:colors.red,
        padding:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:8
    }

})

export default CreateDeck;