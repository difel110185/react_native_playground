import React, { Component } from 'react';
import {ActivityIndicator, StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from "axios";
import {API_KEY} from 'react-native-dotenv';
import Moment from 'moment';
import FullWidthImage from 'react-native-fullwidth-image';

export default class NewsDetails extends Component {
    static navigationOptions = {title: "News Details"};

    state = {
        newsItem: undefined,
        loading: true
    };

    componentDidMount = () => {
        const newsApiUrl = this.props.navigation.getParam('newsApiUrl');
        axios.get(newsApiUrl + "?show-fields=all&api-key=" + API_KEY).then(res => {
            this.setState({ newsItem: res.data.response.content.fields, loading: false });
        })
    };

    render = () => {
        const content = this.state.newsItem;
        return (
            <ScrollView style={styles.v_container}>
                {this.state.loading && <ActivityIndicator size="large" color="#0686E4" />}
                {!this.state.loading &&
                    <View style={styles.container}>
                        <Text style={styles.headline}>{content.headline}</Text>
                        <Text style={styles.trail}>{content.trailText}</Text>
                        <Text style={styles.byline}>By {content.byline}</Text>
                        <Text style={styles.date}>{Moment(content.firstPublicationDate).format("ddd D MMM YYYY HH:mm")}</Text>

                        {content.thumbnail && <FullWidthImage source={{uri: content.thumbnail}} />}

                        <Text style={styles.bodyText}>{content.bodyText}</Text>
                    </View>
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    v_container: {
        padding: 8,
        backgroundColor: '#F0F0F0',
        height: '100%'
    },
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 16,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 0,
        marginBottom: 6
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 20
    },
    trail: {
        marginTop: 5
    },
    date: {
        marginBottom: 10
    },
    byline: {
        fontSize: 12,
        marginTop: 10
    },
    bodyText: {
        marginTop: 10,
        textAlign: 'justify'
    }
});
