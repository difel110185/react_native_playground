import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

export default class TextInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    static defaultProps = {
        value: "Test Value"
    };

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, width: 250, borderColor: "gray", borderWidth: 1}}
                    placeholder="Please provide some text"
                    value={this.state.value}
                    onChangeText={(value) => this.setState({value})}
                />
                <Text>{this.state.value}</Text>
            </View>
        )
    }
}