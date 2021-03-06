import React, { Component } from 'react';
import { Button, Image, View, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ImagePickerComponent extends Component {

    state = {
        image: null
    };

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted')
                alert('Sorry, we need Camera Roll permissions to make this work.');
        }
    };

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3]
        });

        console.log(result);

        if (!result.cancelled)
            this.setState({image: result.uri})
    };

    render() {
        let image = this.state.image;
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title="Pick an image from camera roll" onPress={this._pickImage} />
                {!image && <ActivityIndicator/>}
                {image && <Image source={{uri: image}} style={{width: 200, height: 200}} />}
            </View>
        )
    }
}
