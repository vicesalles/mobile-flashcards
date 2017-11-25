import React,{Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';
import { withNavigation, NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import {resetQuiz} from '../../actions/';

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
            <Text>{this.props.quiz.avg}% Correct</Text>
            <Text>{this.props.quiz.ok}</Text>
            <Text>{this.props.quiz.ko}</Text>
            <TouchableHighlight onPress={this.goHome}><Text>OK</Text></TouchableHighlight>
        </View>)                        
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
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