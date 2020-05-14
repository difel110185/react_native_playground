import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Home from "./view/Home";
import AddItem from "./view/AddItem";
import ListItem from "./view/ListItem";

const RootStack = createStackNavigator(
    {
      Home: {
        screen: Home
      },
      Add: {
        screen: AddItem
      },
      List: {
        screen: ListItem
      }
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0686E4'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
    }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <AppContainer/>
  );
}
