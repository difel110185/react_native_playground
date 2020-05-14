import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home",
        headerStyle: {
            backgroundColor: '#F4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button
                    title="Go To Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        someId: 100,
                        someTitle: 'Title'
                    })}
                 />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f00',
        alignItems: "center",
        justifyContent: 'center'
    }
});
