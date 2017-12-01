import React from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableHighlight } from 'react-native';
import {TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import * as colors from './utils/colors';
import { FontAwesome } from '@expo/vector-icons';
import store from './store';
import {setLocalNotification} from './utils/notification';

import MainList from './components/MainList';
import FlashStatusBar from './components/FlashStatusBar';
import CreateButton from './components/CreateButton';
import MainHeader from './components/MainHeader';
import CreateDeck from './components/CreateDeck';
import CreateCard from './components/CreateCard';
import DoQuiz from './components/DoQuiz';
import DeckView from './components/DeckView';

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
function Home(){
  return <Tab/>
}

export default class App extends React.Component {
   
  componentDidMount(){
    //Setting up local notifications
    setLocalNotification();
  }

  render() {
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashStatusBar/>       
          <Home/>    
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
