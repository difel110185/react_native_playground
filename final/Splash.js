import React, {Component} from 'react';
import {View, StyleSheet, Button, ActivityIndicator, Text} from 'react-native';
import {NavigationActions, StackActions} from "react-navigation";

export default class Home extends Component {
    state = {
        loading: true
    };

    componentDidMount = () => {
        setTimeout(() => this.props.navigation.navigate('App'), 1000);
    };

    render() {
        return (
            <View style={styles.splash}>
                <Text style={styles.title}>Diego Felix</Text>
                <Text style={styles.subtitle}>A01051545</Text>
                <ActivityIndicator size="large" color="#fff"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        backgroundColor: '#0686E4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 14,
        color: "#fff",
        marginTop: 5,
        marginBottom: 30,
    }
});
