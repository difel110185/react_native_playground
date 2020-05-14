import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Slider } from 'react-native';

export default class SliderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            min: this.props.min,
            max: this.props.max,
            step: this.props.step,
        }
    }

    static defaultProps = {
        value: 3,
        min: 0,
        max: 100,
        step: 1
    };

    render() {
        return (
            <View>
                <Text>The value of the slider component is {this.state.value}</Text>
                <Slider
                    value={this.state.value}
                    minimumValue={this.state.min}
                    maximumValue={this.state.max}
                    step={this.state.step}
                    onValueChange={(value) => {
                        this.setState({value})
                    }}
                />
            </View>
        )
    }
}