import React, { Component } from 'react';
import {View, Image, Text, Picker, Slider, Switch} from 'react-native';

export default class ChallengeComponent extends Component {
    state = {
        photoId: 0,
        sliderValue: 150,
        rotate: false
    };

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Picker
                    style={{width: 200, marginBottom: 20}}
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
                <Slider
                    style={{width: 200, marginBottom: 20}}
                    value={this.state.sliderValue}
                    minimumValue="100"
                    maximumValue="200"
                    step="1"
                    onValueChange={(value) => {
                        this.setState({sliderValue: value})
                    }}
                />
                <Switch
                    style={{marginBottom: 20}}
                    value={this.state.rotate}
                    onValueChange={(value) => {
                        this.setState({rotate: value})
                    }}
                />
                <View style={{width: 200, height: 200, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={{uri: `https://picsum.photos/id/${this.state.photoId}/150/150`}}
                        style={{
                            width: this.state.sliderValue,
                            height: this.state.sliderValue,
                            transform: [{ rotate: this.state.rotate ? '180deg' : '0deg' }]
                        }}
                    />
                </View>
            </View>
        )
    }
}