import React from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

function Results(props){
    return( <View>
                <Text>{props.quiz}</Text>
                <Text>{props.quiz.ok}</Text>
                <Text>{props.quiz.ko}</Text>
                <TouchableHighlight><Text>OK</Text></TouchableHighlight>
            </View>)
}

const styles = StyleSheet.create({
    container:{}
})

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Results);