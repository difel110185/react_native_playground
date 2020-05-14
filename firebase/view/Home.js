import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {title: "Home"};

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Go To AddItem"
                    onPress={() => this.props.navigation.navigate('Add')}
                />
                <Button
                    title="Go To ListItem"
                    onPress={() => this.props.navigation.navigate('List')}
                />
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
