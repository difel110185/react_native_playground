import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GPSComponent from "./GPSComponent";
import MapComponent from "./MapComponent";
import ChallengeComponent from "./ChallengeComponent";

export default function App() {
  return (
    <ChallengeComponent />
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
