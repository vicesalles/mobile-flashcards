import React,{Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {connect} from 'react-redux';

import * as colors from '../utils/colors';

import Question from './Quiz/Question';
import Counter from './Quiz/Counter';
import Tip from './Quiz/Tip';
import Results from './Quiz/Results';

const Hola = () =>{
    return (<View><Text>hola</Text></View>)
}

const Quiz = StackNavigator({
    Qt: {
        screen: Question
      },
      Tp: {
        screen: Tip
      },
      Rt: {
        screen: Results
      }
},{
    initialRouteName:'Qt',
    headerMode:'none'
})



class DoQuiz extends Component{
    state={
        answered:false,
        wantsTip:false
    }
  
    render(){
    
            return(
                <View style={{flex:1}}>
                    <Counter style={styles.counter}/>
                    <Quiz style={{flex:1}}/>
                </View>
            )
        
        
    }
}

const styles = StyleSheet.create({
   /* container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:25
    },
    counter:{
        flex:1
    },
    question:{
        flex:3,
        justifyContent:'flex-start',
        alignItems:'center',
    }*/
})

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(DoQuiz);