import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

export default class FlexComponent extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <View style={{paddingTop: 20}}>
                <View style={styles.topContainer}>
                    <View style={styles.middleContainer1}>
                        <Text>I am the first</Text>
                    </View>
                    <View style={styles.middleContainer2}>
                        <Text>I am the second</Text>
                    </View>
                    <View style={styles.middleContainer3}>
                        <Text>I am the third</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.middleContainer1}>
                        <Text>I am the first</Text>
                    </View>
                    <View style={styles.middleContainer2}>
                        <Text>I am the second</Text>
                    </View>
                    <View style={styles.middleContainer3}>
                        <Text>I am the third</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        height: 100,
    },
    bottomContainer: {
        flexDirection: 'column',
        height: 300,
    },
    middleContainer1: {
        flex: 1,
        backgroundColor: '#f00',
        padding: 10,
        marginLeft: 5,
        marginRight: 5
    },
    middleContainer2: {
        flex: 1,
        backgroundColor: '#0f0',
        padding: 10,
        marginLeft: 5,
        marginRight: 5
    },
    middleContainer3: {
        flex: 1,
        backgroundColor: '#00f',
        padding: 10,
        marginLeft: 5,
        marginRight: 5
    },
});
