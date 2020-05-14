import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagePickerComponent from "./ImagePickerComponent";
import FlatListComponent from "./FlatListComponent";
import FetchComponent from "./FetchComponent";
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
