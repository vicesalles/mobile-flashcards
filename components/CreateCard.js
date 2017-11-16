import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TextInput, KeyboardAvoidingView, Switch } from 'react-native';
import * as colors from '../utils/colors';
import { createCard } from '../actions';
import { connect } from 'react-redux';

class CreateDeck extends Component {
    state = {
        question: '',
        tip: '',
        answer: false
    }
    
    toggleAnswer = (state) => {
        this.setState({ answer: !state.answer });
    }

    create = (state) => {
        const card = {
            question: this.state.question,
            tip: this.state.tip,
            result: this.state.answer
        }

        //Avoid creating void cards
        if (card.question !== "" && card.tip !== "") {
            this.props.dispatch(createCard(this.props.state.currentDeck, card));
            this.setState({
                question: '',
                tip: '',
                answer: false
            })
        }

    }

    updateValue = (t, value) => {
        this.setState({ [t]: value })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.row}>
                    <Text stlye={styles.label}>Question</Text>
                    <TextInput value={this.state.question} style={styles.input} onChangeText={(value) => { this.updateValue('question', value) }} />
                </View>

                <View style={styles.row}>
                    <Text stlye={styles.label}>Tip</Text>
                    <TextInput style={styles.input} onChangeText={(value) => { this.updateValue('tip', value) }} />
                </View>

                <View style={styles.row}>
                    <Text stlye={styles.label}>The answer is</Text>
                    <Switch
                        value={this.state.answer}
                        onValueChange={this.toggleAnswer} />
                    <Text>{this.state.answer ? 'TRUE' : 'FALSE'}</Text>
                </View>

                <View style={styles.row}>

                    <TouchableHighlight style={styles.button} onPress={this.create}>
                        <Text style={{ color: colors.white }}>Create</Text>
                    </TouchableHighlight>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

//Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: colors.white
    },
    title: {
        fontSize: 22,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1
    },
    input: {
        flex: 2,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10
    },
    label: {
        flex: 1,
        fontSize: 16
    },
    button: {
        backgroundColor: colors.red,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8
    }

})

function mapStateToProps(state, ownProps) {
    return { state, ownProps }
}

export default connect(mapStateToProps)(CreateDeck);