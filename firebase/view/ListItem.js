import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import {listItems, deleteItem} from "../service/MyServiceInterface";
import {FlatList} from "react-navigation";

export default class ListItem extends Component {
    static navigationOptions = {title: "List Item"};

    state = {
        items: []
    };

    componentDidMount() {
        listItems().then((items) => {
            this.setState({items})
        });
    };

    renderItem = ({item}) => {
        return (
            <TouchableHighlight onPress={() => {
                Alert.alert('Delete item', 'Are you sure you want to delete this item?', [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel',},
                    {text: 'OK', onPress: () => {
                        deleteItem(item.id);
                        listItems().then((items) => {
                            this.setState({items})
                        });
                    },}
                ])
            }}>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.values.name}</Text>
                </View>
            </TouchableHighlight>
        );
    };

    render() {
        return (
            <View style={styles.v_container}>
                <FlatList
                    style={styles.container}
                    data={this.state.items}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    v_container: {
        padding: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    container: {
        marginTop: 14,
        alignSelf: "stretch",
    },
    row: {
        elevation: 1,
        borderRadius: 2,
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 16,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 0,
        marginBottom: 6,
    },
    title: {
        color: '#464646',
        textAlignVertical: 'top',
        fontSize: 20,
        marginTop: 5
    },
});
