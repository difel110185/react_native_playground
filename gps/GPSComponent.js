import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';

export default class GPSComponent extends Component {

    constructor() {
        super();
        this.state = {
            locationPermission: 'unknown',
            position: 'unknown'
        }
    }

    _getLocationPermissions = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted')
            this.setState({locationPermission: false})
        else
            this.setState({locationPermission: true})
    }

    componentDidMount() {
        this._getLocationPermissions();
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords);
            console.log(`My position: ${position.coords.latitude}, ${position.coords.longitude}`);
            let coordinates = position.coords.latitude + ', ' + position.coords.longitude;
            this.setState({position: coordinates})
        }, (error) => console.log(JSON.stringify(error)))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>POSITION:</Text>
                <Text style={styles.paragraph}>{this.state.position}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        textAlign: 'center'
    }
})
