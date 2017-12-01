import React from 'react';
import {TabNavigator, StackNavigator } from 'react-navigation';
import { TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as colors from '../utils/colors';

//Components
import MainList from './MainList';
import CreateButton from './CreateButton';
import MainHeader from './MainHeader';
import CreateDeck from './CreateDeck';
import CreateCard from './CreateCard';
import DoQuiz from './DoQuiz';
import DeckView from './DeckView';

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
    navigationOptions:({navigation})=>({
      title:'Deck',
      headerMode:'screen',
      headerLeft: <TouchableHighlight style={{marginLeft:10}} onPress={() =>navigation.navigate("Home")}><FontAwesome name='home' size={25} color={'black'}/></TouchableHighlight>
    })
  },
  AddCard:{
    screen: CreateCard,
    navigationOptions:{
      title:'Creating NEW Card'
    } 
  },  
  Quiz: {
    screen: ({navigation})=> <DoQuiz screenProps={{rootNavigation:navigation}}/>,
    navigationOptions:{
      header:null
    }
  }
},{
  initialRouteName:'Home',
  mode:'card' 
})

//MAIN NAVIGATOR which allows to explore or to create
const Tab = TabNavigator({

  Explore:{
    screen: Stack
  },
  Create:{
    screen: CreateDeck
  }  

},{
  initialRouteName:'Explore',
  tabBarOptions:{
    tabBarVisible:false,
    style:{
      backgroundColor:colors.black
    }
  }
})

//This function returns the homepage which includes the nested navigator
export default function Navigator(){
  return <Tab/>
}