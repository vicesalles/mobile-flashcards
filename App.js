import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {TabNavigator, StackNavigator } from 'react-navigation';
import * as colors from './utils/colors';

import MainList from './components/MainList';
import FlashStatusBar from './components/FlashStatusBar';
import CreateButton from './components/CreateButton';
import MainHeader from './components/MainHeader';
import CreateDeck from './components/CreateDeck';
import CreateCard from './components/CreateCard';
import DoQuiz from './components/Quiz';
import DeckView from './components/DeckView';

//MAIN NAVIGATOR which allows to explore or to create
const Tab = TabNavigator({

  Explore:{
    screen: Home
  },
  Create:{
    screen: CreateDeck
  }  

})

//Navigation within already created Decks
const Stack = StackNavigator({
  Home: {
    screen: MainList,
    navigationOptions:{
      header:null
    }
  },
  Deck:{
    screen:DeckView,
    navigationOptions:{
      title:'Deck'
    }
  },
  AddCard:{
    screen: CreateCard,
    navigationOptions:{
      title:'Creating NEW Card'
    } 
  },  
  Quiz: {
    screen: DoQuiz,
    navigationOptions:{
      title:'Quiz'
    } 
  }
})

//This function returns the homepage which includes the nested navigator

function Home(){
  return <Stack/>
}

export default class App extends React.Component {

  
  render() {
    
    

    return (
      <View style={styles.container}>
        <FlashStatusBar/>       
        <Tab/>     
      </View>
    );
  }
}

/*
 <MainHeader style={styles.header}/>
    <CreateButton style={styles.button}/>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    justifyContent:'flex-start',
    backgroundColor: colors.black
  },
  list:{
    flex:1
  }
});
