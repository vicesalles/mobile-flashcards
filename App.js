import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {TabNavigator, StackNavigator } from 'react-navigation';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import * as colors from './utils/colors';

import MainList from './components/MainList';
import FlashStatusBar from './components/FlashStatusBar';
import CreateButton from './components/CreateButton';
import MainHeader from './components/MainHeader';
import CreateDeck from './components/CreateDeck';
import CreateCard from './components/CreateCard';
import DoQuiz from './components/DoQuiz';
import DeckView from './components/DeckView';

//MAIN NAVIGATOR which allows to explore or to create
const Tab = TabNavigator({

  Explore:{
    screen: Home
  },
  Create:{
    screen: CreateDeck
  }  

},{
  
  tabBarOptions:{
    tabBarVisible:false,
    style:{
      backgroundColor:colors.black
    }
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
      title:'Deck',
      headerMode:'screen'
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
      header:null
    } 
  }
},{
  initialRouteName:'Home',
  mode:'card' 
})

//This function returns the homepage which includes the nested navigator

function Home(){
  return <Stack/>
}

const store = createStore(
    reducer, applyMiddleware(thunk)    
)

export default class App extends React.Component {

  
  render() {
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashStatusBar/>       
          <Tab/>     
        </View>
      </Provider>
    );
  }
}


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
