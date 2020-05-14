import React, {Component} from 'react';
import {View, StyleSheet, Text, Animated, Easing} from 'react-native';

export default class Animation extends Component {
    static navigationOptions = {title: "Animation"};

    state = {
        width: new Animated.Value(200),
        height: new Animated.Value(200),
        opacity: new Animated.Value(1),
        spinValue: new Animated.Value(0)
    };

    componentDidMount() {
        Animated.sequence([
            Animated.delay(500),
            Animated.parallel([
                Animated.timing(this.state.width, {toValue: 300, duration: 300}),
                Animated.timing(this.state.height, {toValue: 300, duration: 300}),
            ]),
            Animated.parallel([
                Animated.timing(this.state.width, {toValue: 100, duration: 300}),
                Animated.timing(this.state.height, {toValue: 100, duration: 300}),
            ]),
            Animated.parallel([
                Animated.timing(this.state.width, {toValue: 200, duration: 300}),
                Animated.timing(this.state.height, {toValue: 200, duration: 300}),
            ]),
            Animated.sequence([
                Animated.timing(this.state.opacity, {toValue: 0, duration: 100}),
                Animated.timing(this.state.opacity, {toValue: 1, duration: 100}),
            ]),
            Animated.sequence([
                Animated.timing(this.state.opacity, {toValue: 0, duration: 100}),
                Animated.timing(this.state.opacity, {toValue: 1, duration: 100}),
            ]),
            Animated.timing(
                this.state.spinValue,
                {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.state.spinValue,
                {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.linear
                }
            ),
        ]).start();
    }

    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{ width: this.state.width, height: this.state.height, opacity: this.state.opacity, transform: [{rotate: spin}] ,  }}
                    source={require('./assets/download.jpeg')}/>
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
    },
});
