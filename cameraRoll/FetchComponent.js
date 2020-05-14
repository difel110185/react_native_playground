import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Text, View, FlatList, StyleSheet, TouchableHighlight } from 'react-native';

export default class FetchComponent extends Component {

    constructor() {
        super();
        this.state = {
            source: []
        }
    }

    fetchTodos () {
        fetch('http://jsonplaceholder.typicode.com/comments?_limit=10')
            .then((response) => response.json())
            .then((source) => {this.setState({source})})
    };

    componentDidMount() {
        this.fetchTodos();
    }

    renderItem({item}) {
        return (
            <View style={styles.row}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.email}</Text>
            </View>
        );
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.source}
                renderItem={this.renderItem}
                keyExtractor={item => item.name}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, marginTop: 50, backgroundColor: '#F5FCFF'},
    row: {flexDirection: 'row', justifyContent: 'center', padding: 16, backgroundColor: 'red', marginBottom: 3},
    text: {flex: 1, color: 'black', fontWeight: 'bold'}
});
