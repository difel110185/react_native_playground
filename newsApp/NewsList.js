import React, { Component } from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, ActivityIndicator, TouchableHighlight, TextInput, Button, Keyboard } from 'react-native';
import { FlatList } from 'react-navigation';
import Moment from 'moment';
import { API_BASE_URL, API_KEY } from 'react-native-dotenv';


export default class NewsList extends Component {
    static navigationOptions = {title: "News List"};

    state = {
        news: [],
        loading: true,
        query: undefined
    };

    componentDidMount = () => {
        axios.get(API_BASE_URL + "/search?page-size=100&api-key=" + API_KEY).then(res => {
            this.setState({ news: res.data.response.results, loading: false });
        })
    };

    renderItem = ({item}) => {
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('NewsDetails', {
                newsApiUrl: item.apiUrl
            })}>
                <View style={styles.row} >
                    <View style={styles.metadata}>
                        <Text style={styles.section}>{item.sectionName}</Text>
                        <Text style={styles.date}>{Moment(item.webPublicationDate).format("ddd D MMM YYYY HH:mm")}</Text>
                    </View>

                    <Text style={styles.title}>{item.webTitle}</Text>
                </View>
            </TouchableHighlight>
        );
    };

    onSearchButtonPressed = () => {
        if (this.state.query) {
            Keyboard.dismiss();
            this.setState({loading: true});
            axios.get(API_BASE_URL + "/search?q=" + this.state.query + "&page-size=100&api-key=" + API_KEY).then(res => {
                this.setState({ news: res.data.response.results, loading: false });
            })
        }
    };

    render = () => {
        return (
            <View style={styles.v_container}>
                <View style={styles.searchView}>
                    <TextInput
                        style={styles.queryInput}
                        value={this.state.query}
                        onChangeText={(value) => this.setState({query: value})}
                    />
                    <Button title="Search" style={styles.searchButton} onPress={this.onSearchButtonPressed} />
                </View>
                {this.state.loading && <ActivityIndicator size="large" color="#0686E4" style={{marginTop: 20, marginBottom: 20}} />}
                {!this.state.loading &&
                    <FlatList
                        style={styles.container}
                        data={this.state.news}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                }
            </View>
        )
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
    section: {
        color: '#464646',
        textAlignVertical: 'bottom',
        justifyContent: 'flex-start',
        fontSize: 12,
    },
    date: {
        flex: 1,
        textAlignVertical: 'bottom',
        textAlign: 'right',
        fontSize: 12,
    },
    metadata: {
        flexDirection: 'row'
    },
    searchView: {
        flexDirection: 'row'
    },
    queryInput: {
        flex: 2,
        backgroundColor: '#FFFFFF'
    },
    searchButton: {
        flex: 1
    }
});
