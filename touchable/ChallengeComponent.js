import React, { Component } from 'react';
import {Alert, View, Button, Image, StyleSheet} from 'react-native';

export default class ChallengeComponent extends Component {

    constructor() {
        super();
        this.state = {
            hulk: 1,
            ironman: 1,
            thor: 1
        }
    }

    btnHulkPress = () => {
        Alert.alert('Toggle Hulk', 'Do you want to toggle Hulk\'s image?', [
            {text: "Cancel", onPress: () => {}},
            {text: "OK", onPress: () => {this.setState({hulk: 0})}}
        ])
    };

    btnIronManPress = () => {
        Alert.alert('Toggle Iron Man', 'Do you want to toggle Iron Man\'s image?', [
            {text: "Cancel", onPress: () => {}},
            {text: "OK", onPress: () => {this.setState({ironman: 0})}}
        ])
    };

    btnThorPress = () => {
        Alert.alert('Toggle Thor', 'Do you want to toggle Thor\'s image?', [
            {text: "Cancel", onPress: () => {}},
            {text: "OK", onPress: () => {this.setState({thor: 0})}}
        ])
    };

    render() {
        return (
            <View style={styles.topContainer}>
                <View style={styles.container}>
                    <Image source={require('./assets/hulk.jpg')} style={{flex: 3, height: 500, opacity: this.state.hulk}}/>
                    <Image source={require('./assets/ironman.jpg')} style={{flex: 3, height: 500, opacity: this.state.ironman}}/>
                    <Image source={require('./assets/thor.jpg')} style={{flex: 3, height: 500, opacity: this.state.thor}}/>
                </View>
                <View style={styles.container}>
                    <Button title="Hulk" color="green" accesibilityLabel="This is the hulk button" onPress={this.btnHulkPress}/>
                    <Button title="Iron Man" color="red" accesibilityLabel="This is the iron man button" onPress={this.btnIronManPress} />
                    <Button title="Thor" color="blue" accesibilityLabel="This is the thor button" onPress={this.btnThorPress} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'column',
    },
    container: {
        flexDirection: 'row',
        width: '90%'
    },
    button: {
        flex: 3,
    },
});
