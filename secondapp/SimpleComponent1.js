import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

export default class SimpleComponent1 extends Component {
    state = {
        showRandomImage: true
    };

    static defaultProps = {
        pic: "https://www.metal-archives.com/images/3/5/4/0/3540340230_logo.jpg?0044",
        message: "Welcome to Vancouver!"
    };

    chooseBananas = () => {
        this.setState({showRandomImage: false});
    };

    componentDidMount() {
        setTimeout(this.chooseBananas, 2500)
    };

    render() {
        let picture = this.state.showRandomImage ? "https://picsum.photos/536/354" : this.props.pic;

        return (
            <View>
                <Text>{this.props.message}</Text>
                <Image source={{uri: picture}} style={{width: 193, height: 193}}/>
            </View>
        )
    }
}

SimpleComponent1.propTypes = {
    pic: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};