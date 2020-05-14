import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from "expo-permissions";

export default class GoogleMaps extends Component {
    static navigationOptions = {title: "Google Maps"};

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
            },
            markers: []
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
        console.log(this.state.markers);

        return (
            <MapView
                ref={el => (this.map = el)}
                region={this.state.region}
                style={styles.map}
            >
                {this.state.markers.map( (marker, index) => (
                    <MapView.Marker key={index} coordinate={{latitude: marker.latitude, longitude: marker.longitude}} />
                ))}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("pressed");
                        const minLat = this.state.region.latitude-this.state.region.latitudeDelta/2;
                        const maxLat = this.state.region.latitude+this.state.region.latitudeDelta/2;
                        const minLong = this.state.region.longitude-this.state.region.longitudeDelta/2;
                        const maxLong = this.state.region.longitude+this.state.region.longitudeDelta/2;
                        let arr = this.state.markers;
                        arr.push({
                            latitude: this.getRandomInRange(minLat, maxLat, 3),
                            longitude: this.getRandomInRange(minLong, maxLong, 3),
                        });
                        this.setState({markers: arr});
                    }}
                >
                    <Text>PIN</Text>
                </TouchableOpacity>
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        position: "absolute",
        bottom: 20,
        alignSelf: 'center'
    },
});
