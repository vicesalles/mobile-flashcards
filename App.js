import React from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import * as colors from './utils/colors';
import { FontAwesome } from '@expo/vector-icons';
import store from './store';
import {setLocalNotification} from './utils/notification';

import Navigator from './components/Navigator';
import FlashStatusBar from './components/FlashStatusBar';


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
          <Navigator/>    
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
