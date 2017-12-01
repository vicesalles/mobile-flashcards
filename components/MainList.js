import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import ListDeckItem from './ListDeckItem';
import { initData,getAllDecks } from '../actions';

import * as api from '../utils/api';

class MainList extends Component {

    componentDidMount() {
        //This action resets AsyncStorage it has a development pourpose
        //this.props.dispatch(initData());
        this.props.dispatch(getAllDecks());        
    }

    componentWillReceiveProps(){
        //We're getting the decks
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

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(MainList);
