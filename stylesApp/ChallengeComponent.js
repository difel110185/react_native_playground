import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

export default class ChallengeComponent extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={styles.innerCircle} />
                <View style={styles.circle1} />
                <View style={styles.innerCircle1} />
                <View style={styles.circle2} />
                <View style={styles.innerCircle2} />
                <View style={styles.circle3} />
                <View style={styles.innerCircle3} />
                <View style={styles.canvas} />
            </View>
        )
    }
}

const size = 150;
const largeSize = size*1.25
const thickness = 15;
const canvasThickness = 160;

const styles = StyleSheet.create({
    canvas: {
        width: size+thickness*2+canvasThickness,
        height: size+thickness*2+canvasThickness,
        borderRadius: (size+thickness*2+canvasThickness)/2,
        borderWidth: thickness+canvasThickness/2,
        borderColor: 'white',
        position: 'absolute',
        top: 185-canvasThickness/2
    },
    circle: {
        width: size,
        height: size,
        borderRadius: size/2,
        borderWidth: thickness,
        borderColor: 'black',
        position: 'absolute',
        top: 200
    },
    innerCircle: {
        width: size-10,
        height: size-10,
        borderRadius: (size-10)/2,
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        top: 200+(10/2)
    },
    circle1: {
        width: largeSize,
        height: largeSize,
        borderRadius: largeSize/2,
        borderWidth: thickness,
        borderColor: 'green',
        position: 'absolute',
        left: 10,
        top: 150
    },
    innerCircle1: {
        width: largeSize-10,
        height: largeSize-10,
        borderRadius: (largeSize-10)/2,
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        left: 10+(10/2),
        top: 150+(10/2)
    },
    circle2: {
        width: largeSize,
        height: largeSize,
        borderRadius: largeSize/2,
        borderWidth: thickness,
        borderColor: 'blue',
        position: 'absolute',
        right: 10,
        top: 150
    },
    innerCircle2: {
        width: largeSize-10,
        height: largeSize-10,
        borderRadius: (largeSize-10)/2,
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        right: 10+(10/2),
        top: 150+(10/2)
    },
    circle3: {
        width: largeSize,
        height: largeSize,
        borderRadius: largeSize/2,
        borderWidth: thickness,
        borderColor: 'red',
        position: 'absolute',
        top: 240
    },
    innerCircle3: {
        width: largeSize-10,
        height: largeSize-10,
        borderRadius: (largeSize-10)/2,
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        top: 240+(10/2)
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
