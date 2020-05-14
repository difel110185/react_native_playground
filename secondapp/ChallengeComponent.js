import React, { Component } from 'react';
import {View, Image, TextInput} from 'react-native';

export default class ChallengeComponent extends Component {
    state = {
        pic: "https://picsum.photos/200/200",
    };

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, width: 200, borderColor: "gray", borderWidth: 1}}
                    placeholder="Image's Id"
                    onSubmitEditing={(event) => {
                        this.setState({pic: `https://picsum.photos/id/${event.nativeEvent.text}/200/200`})
                    }}
                />
                <Image source={{uri: this.state.pic}} style={{width: 200, height: 200}}/>
            </View>
        )
    }
}