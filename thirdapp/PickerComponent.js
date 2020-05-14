import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Picker } from 'react-native';

export default class PickerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoId: 0
        }
    }

    render() {
        return (
            <View style={{width: 250}} >
                <Picker
                    value={this.state.photoId}
                    selectedValue={this.state.photoId}
                    onValueChange={(value) => {
                        this.setState({photoId: value})
                    }}
                >
                    <item label="Photo 0" value="0" />
                    <item label="Photo 1" value="1" />
                    <item label="Photo 10" value="10" />
                    <item label="Photo 100" value="100" />
                    <item label="Photo 1000" value="1000" />
                </Picker>
            </View>
        )
    }
}