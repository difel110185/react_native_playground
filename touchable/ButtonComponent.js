import React, { Component } from 'react';
import {Alert, View, Button, ScrollView, Text} from 'react-native';

const alertMessage = "You pressed a button";
let _scrollView;

export default class ButtonComponent extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    btnPress() {
        _scrollView.scrollTo({y:200})
        // Alert.alert('My Alert', alertMessage, [
        //     {text: "Cancel", onPress: () => {console.log("you pressed cancel")}},
        //     {text: "OK", onPress: () => {console.log("you pressed ok")}}
        // ])
    }

    render() {
        return (
            <View>
                <ScrollView
                    ref={(scrollView) => {_scrollView = scrollView}}
                    contentContainerStyle={{padding: 30}}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        console.log(`Width: ${contentWidth} - Height: ${contentHeight}`)
                    }}
                    onScroll={() => {console.log("You are scrolling!")}}
                    pagingEnabled={true}
                >
                    <Text style={{fontSize: 96}}>Large text 1</Text>
                    <Text style={{fontSize: 96}}>Large text 2</Text>
                    <Text style={{fontSize: 96}}>Large text 3</Text>
                    <Text style={{fontSize: 96}}>Large text 4</Text>
                    <Text style={{fontSize: 96}}>Large text 5</Text>
                    <Text style={{fontSize: 96}}>Large text 6</Text>
                    <Text style={{fontSize: 96}}>Large text 7</Text>
                    <Text style={{fontSize: 96}}>Large text 8</Text>
                    <Text style={{fontSize: 96}}>Large text 9</Text>
                    <Text style={{fontSize: 96}}>Large text 10</Text>
                </ScrollView>
                <Button
                    onPress={this.btnPress}
                    title="Learn more"
                    color="violet"
                    accesibilityLabel="This is a button"
                />
            </View>
        )
    }
}
