import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button, Image, TouchableHighlight, Modal } from 'react-native';

export default class SecondPage extends Component {
    static navigationOptions = {
        headerTitle: () => <Image source={{uri: 'https://picsum.photos/id/1/30'}} style={{width: 30, height: 30}}/>,
        headerStyle: {
            backgroundColor: '#FF0000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible} >
                    <View style={styles.modal}>
                        <Image source={{uri: 'https://via.placeholder.com/300'}} style={{width: 300, height: 300}}/>

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Load New Image</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: "center",
        justifyContent: 'center'
    },
    modal: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: "center",
        justifyContent: 'center'
    }
});
