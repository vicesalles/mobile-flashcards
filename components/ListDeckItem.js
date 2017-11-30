import React, { Component } from 'react';
import {View, Text, TouchableHighlight,StyleSheet } from 'react-native';
import {black,red,white,grey} from '../utils/colors';
import {connect} from 'react-redux';
import {setDeck} from '../actions';
import {NavigationActions} from 'react-navigation';


class ListDeckItem extends Component {

    componentDidMount(){
      // console.log('listItem',this.props.state.navigation);
    }

    //When pressed
    pressed = (id) =>{
        this.props.dispatch(setDeck(this.props.item.title));
        const title = this.props.item.title;
        const navigateAction = NavigationActions.navigate({
            routeName:'Deck',
            params:{
                deck: title
            }
        })
        //this.props.ownProps.navigation.navigate('Deck');
        this.props.ownProps.navigation.dispatch(navigateAction);
    }

    //Getting the Number of cards
    nCards = (array) =>{
        
        return array.length;
    }

    render() {        
        return (
        <TouchableHighlight style={styles.item} key={this.props.title} onPress={()=>this.pressed(this.props.title)}>
            <View style={styles.container}>
                <Text style={styles.title} >{this.props.item.title}</Text>
                <Text style={styles.nCards}>{this.nCards(this.props.item.cards)} cards</Text>
            </View>
        </TouchableHighlight>)
    }
}

//Styling the component
const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: red,
    alignItems: 'center',    
    padding: 22,
    borderBottomWidth: 1,
    borderBottomColor: white    
  },
  container:{
      
      justifyContent: 'space-between',
      alignItems:'center'    
  },
  title:{
      fontSize:22,
      color:white
  },
  nCards:{
      fontSize:12,
      color:white,
      textAlign:'right'
  }
});

function mapStateToProps(state,ownProps){
    return {state,ownProps}
}

export default connect(mapStateToProps)(ListDeckItem);