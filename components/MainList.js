import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import ListDeckItem from './ListDeckItem';
import { initData,getAllDecks } from '../actions';

import * as api from '../utils/api';

class MainList extends Component {

    componentDidMount() {
        //this.props.dispatch(initData());
        this.props.dispatch(getAllDecks());
        
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.decks}
                    keyExtractor={(item) => item.title}
                    renderItem={(item) => <ListDeckItem navigation={this.props.navigation} {...item} />} />
            </View>
        )
    }
}

function mapStateToProps(state) {    
    return state;
}


export default connect(mapStateToProps)(MainList);


/*

[{title:'bob',cards:[1,2,3,4]},{title:'max',cards:[1,2,3]}]
                


 */