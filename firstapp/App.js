import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleComponent1 from "./SimpleComponent1";
import ImageComponent1 from "./ImageComponent1";

export default class App extends React.Component {
  render () {
    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <SimpleComponent1 />
          <ImageComponent1 />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
