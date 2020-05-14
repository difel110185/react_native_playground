import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Alert,
    FlatList,
    TouchableWithoutFeedback,
    Linking
} from 'react-native';
import {Card} from "react-native-elements";
import {NavigationActions, StackActions} from 'react-navigation';
import FullWidthImage from 'react-native-fullwidth-image';
import {db} from "./db";

export default class DrugDetails extends Component {
    static navigationOptions = {title: "Drug Details"};

    renderItem = ({item}) => {
        return (
            <TouchableWithoutFeedback onPress={() => Linking.openURL(item.product_url)}>
                <Card>
                    <Text style={{textAlign:"center",alignSelf:"center"}}>{item.store_name}</Text>
                    <Text>Price: {item.currency_symbol + item.store_price} {item.currency_code}</Text>
                </Card>
            </TouchableWithoutFeedback>
        )
    };

    render = () => {
        let drug = this.props.navigation.getParam("item");
        return (
            <View style={styles.v_container}>
                <ScrollView style={styles.container}>
                    <Text style={styles.name}>{drug.values.product_name}</Text>
                    <Text style={styles.brand}>{drug.values.brand}</Text>
                    <Text style={styles.category}>{drug.values.category}</Text>

                    {drug.values.images.length > 0 && <FullWidthImage source={{uri: drug.values.images[0]}}/>}

                    <Text style={styles.description}>{drug.values.description}</Text>
                    {drug.values.stores && (
                        <View style={{paddingBottom:20}}>
                            <Text>Available At:</Text>
                            <FlatList horizontal={true} data={drug.values.stores} renderItem={this.renderItem}/>
                        </View>
                    )}
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <Button title={"Delete Item"} color="white" onPress={() => {
                        Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel',},
                            {
                                text: 'OK', onPress: () => {
                                    db.ref('/items').child(drug.id).remove().then(() => {
                                        const resetAction = StackActions.reset({
                                            index: 0,
                                            actions: [NavigationActions.navigate({routeName: 'Inventory'})],
                                        });
                                        this.props.navigation.dispatch(resetAction);
                                    });
                                }
                            }
                        ])
                    }}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    v_container: {
        backgroundColor: '#F0F0F0',
        height: '100%'
    },
    container: {
        padding: 14,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20
    },
    category: {
        marginBottom: 10
    },
    brand: {
        fontSize: 12,
        marginTop: 10
    },
    description: {
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'justify'
    },
    buttonContainer: {
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: '#FF0000'
    }
});
