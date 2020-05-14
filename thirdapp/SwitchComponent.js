import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Switch } from 'react-native';

export default class SwitchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    static defaultProps = {
        value: false
    };

    render() {
        const toggle = this.state.value ? "ON" : "OFF";

        return (
            <View>
                <Text>The switch switch is {toggle}</Text>
                <Switch
                    value={this.state.value}
                    onValueChange={(value) => {
                        this.setState({value})
                    }}
                >
                </Switch>
            </View>
        )
    }
}