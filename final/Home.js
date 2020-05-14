import React, {Component} from 'react';
import {View, StyleSheet, Button, ActivityIndicator, Text} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {title: "Home"};

    render() {
        return (
            <View style={styles.container}>
                <Button title="Fetch from API" onPress={() => this.props.navigation.navigate('FetchFromAPI')} />
                <Button title="Animation" onPress={() => this.props.navigation.navigate('Animation')} />
                <Button title="Google Maps" onPress={() => this.props.navigation.navigate('GoogleMaps')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
