import React,{Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import { withNavigation, NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import {resetQuiz} from '../../actions/';
import { FontAwesome } from '@expo/vector-icons';
import * as colors from '../../utils/colors';

class Results extends Component{
    
    //Navigate to Deck View
    goHome = () =>{
     this.props.screenProps.navigate('Deck');       
    }

    componentDidMount(){
        console.log('Results',this.props);
    }

    render(){
        return( 
        <View style={styles.container}>
            <Text style={styles.avg}>{this.props.quiz.avg}% Correct</Text>
            <View style={styles.count}>
                <Text style={styles.result}>{this.props.quiz.ok} <FontAwesome name="check"/></Text>
                <Text style={styles.result} >{this.props.quiz.ko} <FontAwesome name="close"/></Text>
            </View>
            <TouchableHighlight style={styles.backButton} onPress={this.goHome}><Text style={styles.btText}>Go back</Text></TouchableHighlight>
        </View>)                        
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    avg:{
        fontSize:30
    },
    result:{
        fontSize:25,
        marginLeft:25
    },
    count:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    backButton:{
        padding:20,
        paddingRight:10,
        paddingLeft:10,
        marginTop:5,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.red
    },
    btText:{
        color:colors.white,
        fontSize:15
    }
})

function mapStateToProps(state,ownProps){
       
    const ok = state.ok;
    const ko = state.ko;
    const total = ko + ok;
    
    //Caltulating average correct responses
    const avg = Math.round((ok*100)/total);

    //Returning only necessary state data
    const quiz = {
        avg,
        ok,
        ko
    }
    return {quiz,ownProps};
}

export default withNavigation(connect(mapStateToProps)(Results));