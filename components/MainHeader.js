import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {black,red,white,grey} from '../utils/colors';

export default function MainHeader (){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>FlashCards Go</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: black,
      alignItems: 'center',    
      borderBottomColor: white    
    },
    title:{
        fontSize:22,
        color:white,
        textAlign:'center'
    }
  });
  