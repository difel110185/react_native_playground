import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class SecondScreen extends Component {
    static navigationOptions = {
        title: "Details",
        headerStyle: {
            backgroundColor: '#00FF00'
        },
        headerTintColor: '#00f',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };

    render() {
        const {navigation} = this.props;
        const someId = navigation.getParam('someId', 'NO-ID');
        const someTitle = navigation.getParam('someTitle', 'No title');
        return (
            <View style={styles.container}>
                <Text>Details Screen</Text>
                <Text>Id: {JSON.stringify(someId)}</Text>
                <Text>Title: {JSON.stringify(someTitle)}</Text>
                <Button
                    title="Go To Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go To Details... again"
                    onPress={() => this.props.navigation.push('Details', {
                        someId: Math.floor(Math.random() * 100)
                    })}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0',
        alignItems: "center",
        justifyContent: 'center'
    }
});
