import React from 'react';
import {View, Image } from 'react-native';

export default class ImageComponent1 extends React.Component {
    render () {
        return (
            <View>
                <Image source={require('./bcit.png')}/>
            </View>
        )
    }
}