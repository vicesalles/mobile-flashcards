import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import * as colors from './utils/colors';

import MainList from './components/MainList';
import FlashStatusBar from './components/FlashStatusBar';
import CreateButton from './components/CreateButton';
import MainHeader from './components/MainHeader';

export default class App extends React.Component {

  
  render() {
    
    //Temporary data
    const myItems = [{title:'React JS',id:0, nCards:5},
    {title:'React Native',id:1, nCards:4},
    {title:'Redux',id:2, nCards:8},
    {title:'Express',id:3, nCards:8},
    {title:'Socket.io',id:4, nCards:8},
    {title:'MongoDB',id:5, nCards:8},
    {title:'Passport.js',id:6, nCards:1}];

    return (
      <View style={styles.container}>
        <FlashStatusBar/>
        <MainHeader style={styles.header}/>
        <MainList style={styles.list} items={myItems}/>
        <CreateButton style={styles.button}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: colors.black
  },
  list:{
    flex:4
  },
  button:{
    flex:1
  },
  header:{
    flex:1
  }
});
