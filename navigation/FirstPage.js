import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default class FirstPage extends Component {
    static navigationOptions = {
        title: "First Page",
        headerStyle: {
            backgroundColor: '#00FF00'
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'https://picsum.photos/id/1/300'}} style={{width: 300, height: 300}}/>
                <Button
                    title="Go To Second Page"
                    onPress={() => this.props.navigation.navigate('SecondPage', {
                        someId: 100,
                        someTitle: 'Title'
                    })}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f00',
        alignItems: "center",
        justifyContent: 'center'
    }
});
