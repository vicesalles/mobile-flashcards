import React from 'react';
import {View,Text,TouchableHighlight} from 'react-native';

export default function NoMoreCards (){
    return(
        <View>
            <Text>No more cards avaible</Text>
            <Text>well done!</Text>
            <TouchableHighlight>
                <Text>HOME</Text>
            </TouchableHighlight>
        </View>
    )
}