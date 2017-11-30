import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';
import * as colors from '../utils/colors';
import {createDeck} from '../actions';
import {NavigationActions} from 'react-navigation';

class CreateDeck extends Component{
    state={
        value:''
    }

    //Updates form value
    updateValue = (value) =>{
       this.setState({value});        
    }

    //Create Decks
    createNew = () =>{
        const value = this.state.value;
        this.props.dispatch(createDeck(value));
        this.setState({value:''});
        
        const navigateAction = NavigationActions.navigate({
            routeName:'Explore',
            action: NavigationActions.navigate({routeName:'Deck',params:{deck:value}})
        })
        
        this.props.navigation.dispatch(navigateAction);
    }
   
    render(){
        
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.title}>Create a NEW deck</Text>  
                
                    <View style={styles.row}>
                        <Text stlye={styles.label}>Title</Text>              
                        <TextInput value={this.state.value} onChangeText={this.updateValue} style={styles.input}/>
                        <TouchableHighlight style={styles.button} onPress={this.createNew}>
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


function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(CreateDeck);