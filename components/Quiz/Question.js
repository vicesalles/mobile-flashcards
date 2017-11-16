import React from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as colors from '../../utils/colors';

import {nextQuestion} from '../../actions';

function Question(props){

    pressed = (value)=>{
        console.log(value); 
        
        if(value==='tip'){
            props.navigation.navigate('Tp');
        }else{            
            props.dispatch(nexQuestion(value))           
        }
    }
    console.log(props);
    return(<View style={styles.container}>
        <View style={styles.qContainer}>
            <Text style={styles.question}>{props.question}</Text>
        </View>
        <View style={styles.buttons}>
            <TouchableHighlight onPress={()=>this.pressed('true')} style={[styles.button,styles.true]}><Text style={styles.bText}>TRUE</Text></TouchableHighlight>
            <TouchableHighlight onPress={()=>this.pressed('false')} style={[styles.button,styles.false]}><Text style={styles.bText}>FALSE</Text></TouchableHighlight>
            <TouchableHighlight onPress={()=>this.pressed('tip')} style={[styles.button,styles.tip]}><Text style={styles.bText}>TIP</Text></TouchableHighlight>
        </View>    
    </View>)
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    qContainer:{
        flex:1
    },
    question:{
        fontSize:30
    },
    buttons:{        
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:50
    },
    button:{
        padding:20,
        paddingRight:10,
        paddingLeft:10,
        marginTop:5,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    true:{
        backgroundColor:colors.green,        
    },
    false:{
        backgroundColor:colors.red,        
    },
    tip:{backgroundColor:colors.blue},
    bText:{
        color:colors.white,
        fontSize:35
    }
});

function mapStateToProps(state){
    console.log('question muntat');
    const current = state.currentQuestion;
    const deck = state.decks.filter((d)=>d.title===state.currentDeck);
    const question = deck[0].cards[current].question;
   return {question};
}

export default connect(mapStateToProps)(Question);