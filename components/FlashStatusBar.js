import React,{Component} from 'react';
import {View,Text,StatusBar,StyleSheet} from 'react-native';
import { Constants } from 'expo';
import { black} from '../utils/colors';

export default class FlashStatusBar extends Component{
    render(){
        return(
            <View style={{ backgroundColor:black, height: Constants.statusBarHeight }}>
                <StatusBar translucent backgroundColor={black} barStyle="light-content" />
            </View>
        )
    }
}