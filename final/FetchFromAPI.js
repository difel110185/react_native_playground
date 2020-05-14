import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import axios from 'axios';

export default class FetchFromAPI extends Component {
    static navigationOptions = {title: "Fetch from API"};

    coins = {
        litecoin: "ltc",
        ethereum: "eth",
        zcash: "zec",
        dash: "dash",
        ripple: "xrp",
        monero: "xmr",
        'bitcoin-cash': "bch",
        neo: "neo",
        cardano: "ada",
        eos: "eos"
    };

    state = {
        items: []
    };

    componentDidMount = () => {
        axios.get("https://api.coingecko.com/api/v3/simple/price?ids=litecoin%2Cethereum%2Czcash%2Cdash%2Cripple%2Cmonero%2Cbitcoin-cash%2Cneo%2Ccardano%2Ceos&vs_currencies=cad")
            .then(response => {
                let items = [];

                for (const property in response.data) {
                    items.push({
                        name: property,
                        cad: response.data[property].cad,
                        image: `https://cryptoicons.org/api/icon/${this.coins[property]}/300`
                    });
                }

                this.setState({items});
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    renderItem = ({item}) => {
        return (
            <Card image={{uri: item.image}} containerStyle={styles.card}>
                <Divider style={styles.divider}/>
                <Text style={styles.name}>{item.name}: {item.cad} CAD</Text>
            </Card>
        );
    };

    render() {
        return (
            <View style={styles.v_container}>
                <FlatList data={this.state.items}
                          style={styles.container}
                          keyExtractor={item => item.name}
                          renderItem={this.renderItem} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    v_container: {
        backgroundColor: '#F0F0F0',
        height: '100%'
    },
    container: {
        padding: 14
    },
    card: {
        borderColor: '#464646',
        margin: 0,
        marginBottom: 14
    },
    divider: {
        backgroundColor: "#464646"
    },
    name: {
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: '#0686E4'
    }
});
