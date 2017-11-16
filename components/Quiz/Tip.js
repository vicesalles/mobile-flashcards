import React from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

function Tip (props){

    goBack = () =>{

        props.navigation.navigate('Qt');

    }
    return(<View>
        <Text>{props.tip}</Text>
        <TouchableHighlight onPress={this.goBack}>
            <Text>Ok</Text>
        </TouchableHighlight>
    </View>)
}

const styles = StyleSheet.create({

})

function mapStateToProps(state){
    const current = state.currentQuestion;
    console.log('Tip',state);
    return state;
}

export default connect(mapStateToProps)(Tip);