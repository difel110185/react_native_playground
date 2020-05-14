import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Image, Text, View, FlatList, StyleSheet, TouchableHighlight } from 'react-native';

export default class ChallengeComponent extends Component {

    constructor() {
        super();
        this.state = {
            source: []
        }
    }

    fetchTodos () {
        fetch('https://randomuser.me/api/?results=50')
            .then((response) => response.json())
            .then(({results}) => {this.setState({source: results})})
    };

    componentDidMount() {
        this.fetchTodos();
    }

    renderItem({item}) {
        return (
            <View style={styles.row}>
                <Image source={{uri: item.picture.thumbnail}} style={{width:50, height: 50}} />
                <Text style={styles.text}>{item.name.first + ' ' + item.name.last}</Text>
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
                keyExtractor={item => item.email}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, marginTop: 50, backgroundColor: '#F5FCFF'},
    row: {flexDirection: 'row', justifyContent: 'center', padding: 16, backgroundColor: 'red', marginBottom: 3},
    text: {flex: 1, color: 'black', fontWeight: 'bold', margin: 5}
});
