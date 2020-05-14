import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from "expo-permissions";

export default class ChallengeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationPermission: 'unknown',
            position: 'unknown',
            region: {
                latitude: 50.60254331180157,
                latitudeDelta: 0.2729186541296684,
                longitude: 16.721875704824924,
                longitudeDelta: 0.26148553937673924
            }
        };
        this.getRandomInRange = this.getRandomInRange.bind(this);
    }

    _getLocationPermissions = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted')
            this.setState({locationPermission: false})
        else
            this.setState({locationPermission: true})
    };

    componentDidMount() {
        this._getLocationPermissions();
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    latitudeDelta: 1,
                    longitude: position.coords.longitude,
                    longitudeDelta: 1
                }
            })
        }, (error) => console.log(JSON.stringify(error)))
    }

    getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    }

    render() {
        console.log(this.state.region);
        return (
            <MapView
                ref={el => (this.map = el)}
                region={this.state.region}
                style={styles.map}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("pressed")
                        this.map.animateToRegion({latitude: this.getRandomInRange(-180, 180, 3), longitude: this.getRandomInRange(-180, 180, 3)}, 0.5
                        );
                    }}
                >
                    <Text>JUMP</Text>
                </TouchableOpacity>
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    },
    button: {
        backgroundColor: 'rgba(100,100,100,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 100,
        width: 100,
    },
});
