import React,{Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import * as colors from '../utils/colors';

class DoQuiz extends Component{
    state={
        answered:false
    }

    //User answers
    pressed = (r) =>{
        //Check response
        this.setState({answered:true});
    }
    //User wanna show next question
    next = () =>{
        //next question
            //If more questions->

            //If not ->

        //Reset UI
        this.setState({answered:false});
    }
    render(){

        //If user has answered the question:
        if(this.state.answered){

           return(<View>
                <Text>CONGRATS / OUCH!</Text>
                <Text>answer</Text>
                <TouchableHighlight onPress={this.next}>
                    <Text>Next</Text>
                </TouchableHighlight>
            </View>)

        //If not, I show the question
        }else{
            return(
                <View style={styles.container}>
                    <Text style={styles.question}>Question</Text>
                    <View style={styles.buttons}>
                        <TouchableHighlight onPress={()=>this.pressed('true')} style={[styles.button,styles.true]}><Text style={styles.bText}>TRUE</Text></TouchableHighlight>
                        <TouchableHighlight onPress={()=>this.pressed('false')} style={[styles.button,styles.false]}><Text style={styles.bText}>FALSE</Text></TouchableHighlight>
                    </View>    
                </View>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:25
    },
    question:{
        fontSize:25
    },
    buttons:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:50
    },
    button:{
        padding:10,
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
    bText:{
        color:colors.white
    }
})

export default DoQuiz;