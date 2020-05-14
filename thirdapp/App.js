import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChallengeComponent from "./ChallengeComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <ChallengeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
