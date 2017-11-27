import React,{Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux';
import * as colors from '../../utils/colors';
import Results from './Results';

import {nextQuestion} from '../../actions';

class Question extends Component {

    pressed = (value)=>{         
        if(value==='tip'){
            
            this.props.navigation.navigate('Tp');
        }else{                
            //Checking if the answer was correct
            const result = value===this.props.answer?'ok':'ko';            
            this.props.dispatch(nextQuestion(result,this.props.last)); 
        }
    }


    render(){
        if(this.props.ended){
            //Passing parent Navigator down
            return (<Results screenProps={this.props.screenProps}/>)
        }else{
        return(<View style={styles.questionContainer}>
            <View style={styles.qContainer}>
                <Text style={styles.question}>{this.props.question}</Text>
            </View>
            <View style={styles.buttons}>
               
                <TouchableHighlight onPress={()=>this.pressed(true)} style={[styles.button,styles.true]}><Text style={styles.bText}>TRUE</Text></TouchableHighlight>
                <TouchableHighlight onPress={()=>this.pressed(false)} style={[styles.button,styles.false]}><Text style={styles.bText}>FALSE</Text></TouchableHighlight>
                <TouchableHighlight onPress={()=>this.pressed('tip')} style={[styles.button,styles.tip]}><Text style={styles.bText}>TIP</Text></TouchableHighlight>
            </View>    
        </View>)
        }
    }
   
}

const styles = StyleSheet.create({

    questionContainer:{
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
    tip:{backgroundColor:colors.grey},
    bText:{
        color:colors.white,
        fontSize:25
    }
});

function mapStateToProps(state,ownProps){
    
    //Getting index for the current Question
    const current = state.currentQuestion;
    
    //Getting current Deck
    const deck = state.decks.filter((d)=>d.title===state.currentDeck);
    
    //How many cards does this Deck have?
    const cards = deck[0].cards.length;
    
    //Getting question text
    const question = deck[0].cards[current]!==undefined?deck[0].cards[current].question:'';

    //Getting correct answer
    const answer = deck[0].cards[current]!==undefined?deck[0].cards[current].result:'';

    //Checking if this is going to be the last question of the Quizz
    const last = current+1>=cards?true:false;

    const ended = state.quizEnded;

   return {question,answer,last,ended,ownProps};
}

export default withNavigation(connect(mapStateToProps)(Question));