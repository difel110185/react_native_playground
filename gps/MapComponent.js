import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 50.60254331180157,
                latitudeDelta: 0.2729186541296684,
                longitude: 16.721875704824924,
                longitudeDelta: 0.26148553937673924
            }
        };
        this.onRegionComplete = this.onRegionComplete.bind(this);
    }

    onRegionComplete(region) {
        console.log(region);
        this.setState({region})
    }

    render() {
        return (
            <MapView
                region={this.state.region}
                onRegionChange={this.onRegionComplete}
                style={styles.map}
            />
        )
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
