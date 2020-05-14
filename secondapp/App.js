import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleComponent1 from "./SimpleComponent1";
import TextInputComponent from "./TextInputComponent";
import ChallengeComponent from "./ChallengeComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<SimpleComponent1 message="Hello World" />*/}
      {/*<TextInputComponent />*/}
      <ChallengeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50
  },
});
